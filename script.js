document.addEventListener('DOMContentLoaded', () => {
    const moduleList = document.getElementById('module-list');
    const addModuleBtn = document.getElementById('add-module-btn');
    const lessonDetails = document.getElementById('lesson-details');


    let stored = localStorage.getItem('fintech101Planner');
    let parsed;
    if (stored) {
        try {
            parsed = JSON.parse(stored);
        } catch (e) {
            parsed = null;
        }
    }
    if (!Array.isArray(parsed) || parsed.length === 0) {
        parsed = defaultCourseData;
        localStorage.setItem('fintech101Planner', JSON.stringify(parsed));
    }
    let data = parsed;

    // Veriyi Kaydet
    const saveData = () => {
        localStorage.setItem('fintech101Planner', JSON.stringify(data));
    };

    // Arayüzü Yenile
    const renderUI = () => {
        moduleList.innerHTML = '';
        data.forEach((module, moduleIndex) => {
            const moduleItem = document.createElement('li');
            moduleItem.className = 'module-item';
            moduleItem.innerHTML = `
                <span class="module-name">${module.name}</span>
                <button class="delete-btn" data-module-index="${moduleIndex}">✖</button>
            `;
            moduleItem.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-btn')) return;
                document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
                moduleItem.classList.add('active');
                renderLessonView(moduleIndex);
            });

            const deleteBtn = moduleItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`'${module.name}' modülünü silmek istediğinizden emin misiniz?`)) {
                    data.splice(moduleIndex, 1);
                    saveData();
                    renderUI();
                    lessonDetails.innerHTML = '<p class="placeholder">Başlamak için bir modül seçin veya yeni bir modül ekleyin.</p>';
                }
            });

            moduleList.appendChild(moduleItem);
        });
    };

    // Ders Görünümünü Oluştur
    const renderLessonView = (moduleIndex) => {
        const module = data[moduleIndex];
        lessonDetails.innerHTML = `
            <h3>${module.name} - Dersleri</h3>
            <ul id="lesson-list-${moduleIndex}" class="lesson-list"></ul>
            <button id="add-lesson-btn-${moduleIndex}" class="btn btn-primary">Yeni Ders Ekle</button>
        `;

        const lessonList = document.getElementById(`lesson-list-${moduleIndex}`);
        module.lessons.forEach((lesson, lessonIndex) => {
            const lessonItem = document.createElement('li');
            lessonItem.className = 'lesson-item';
            lessonItem.textContent = lesson.title;
            lessonItem.addEventListener('click', () => {
                renderLessonForm(moduleIndex, lessonIndex);
            });
            lessonList.appendChild(lessonItem);
        });

        document.getElementById(`add-lesson-btn-${moduleIndex}`).addEventListener('click', () => {
            const newLessonName = prompt('Yeni dersin başlığını girin:');
            if (newLessonName) {
                module.lessons.push({ title: newLessonName, description: '', topics: [], status: 'Planlandı' });
                saveData();
                renderLessonView(moduleIndex);
            }
        });
    };

    // Konu Detay Formunu Oluştur
    const renderTopicDetailForm = (moduleIndex, lessonIndex, topicIndex) => {
        const topic = data[moduleIndex].lessons[lessonIndex].topics[topicIndex];
        lessonDetails.innerHTML = `
            <h3>Konu Detayını Düzenle</h3>
            <form id="topic-detail-form" class="topic-detail-form">
                <label for="topic-title">Konu Başlığı</label>
                <input type="text" id="topic-title" value="${topic.title}" required>

                <label for="topic-detail">Konu Detayı</label>
                <textarea id="topic-detail">${topic.detail}</textarea>

                <div class="form-actions">
                    <button type="submit" class="btn btn-save">Kaydet</button>
                    <button type="button" id="delete-topic-btn" class="btn btn-danger">Konuyu Sil</button>
                    <button type="button" id="back-to-lesson-btn" class="btn btn-secondary">Derse Geri Dön</button>
                </div>
            </form>
        `;

        document.getElementById('topic-detail-form').addEventListener('submit', (e) => {
            e.preventDefault();
            topic.title = document.getElementById('topic-title').value;
            topic.detail = document.getElementById('topic-detail').value;
            saveData();
            alert('Konu kaydedildi!');
            renderLessonForm(moduleIndex, lessonIndex);
        });

        document.getElementById('delete-topic-btn').addEventListener('click', () => {
            if (confirm(`'${topic.title}' konusunu silmek istediğinizden emin misiniz?`)) {
                data[moduleIndex].lessons[lessonIndex].topics.splice(topicIndex, 1);
                saveData();
                renderLessonForm(moduleIndex, lessonIndex);
            }
        });

        document.getElementById('back-to-lesson-btn').addEventListener('click', () => {
            renderLessonForm(moduleIndex, lessonIndex);
        });
    };

    // Ders Formunu Oluştur
    const renderLessonForm = (moduleIndex, lessonIndex) => {
        const lesson = data[moduleIndex].lessons[lessonIndex];

        // Geriye dönük uyumluluk: topics string ise nesne dizisine çevir
        if (lesson.topics.length > 0 && typeof lesson.topics[0] === 'string') {
            lesson.topics = lesson.topics.map(t => ({ title: t, detail: '' }));
        }

        lessonDetails.innerHTML = `
            <h3>Dersi Düzenle</h3>
            <form id="lesson-form" class="lesson-form">
                <label for="lesson-title">Ders Başlığı</label>
                <input type="text" id="lesson-title" value="${lesson.title}" required>
                
                <label for="lesson-desc">Ders Açıklaması</label>
                <textarea id="lesson-desc">${lesson.description}</textarea>
                
                <label>Anlatılacak Ana Konular (Detay için konuya tıklayın)</label>
                <ul id="topic-list" class="topic-list"></ul>
                <button type="button" id="add-topic-btn" class="btn btn-secondary">Yeni Konu Ekle</button>
                
                <label for="lesson-status">Durum</label>
                <select id="lesson-status">
                    <option value="Planlandı" ${lesson.status === 'Planlandı' ? 'selected' : ''}>Planlandı</option>
                    <option value="Çekimde" ${lesson.status === 'Çekimde' ? 'selected' : ''}>Çekimde</option>
                    <option value="Yayınlandı" ${lesson.status === 'Yayınlandı' ? 'selected' : ''}>Yayınlandı</option>
                </select>

                <div class="form-actions">
                    <button type="submit" class="btn btn-save">Dersi Kaydet</button>
                    <button type="button" id="delete-lesson-btn" class="btn btn-danger">Dersi Sil</button>
                </div>
            </form>
        `;

        const topicList = document.getElementById('topic-list');

        const renderTopics = () => {
            topicList.innerHTML = '';
            lesson.topics.forEach((topic, topicIndex) => {
                const topicItem = document.createElement('li');
                topicItem.className = 'topic-item';
                topicItem.innerHTML = `<span>${topic.title}</span>`;
                topicItem.addEventListener('click', () => {
                    renderTopicDetailForm(moduleIndex, lessonIndex, topicIndex);
                });
                topicList.appendChild(topicItem);
            });
        };

        renderTopics();

        document.getElementById('add-topic-btn').addEventListener('click', () => {
            const newTopicTitle = prompt('Yeni konunun başlığını girin:');
            if (newTopicTitle) {
                lesson.topics.push({ title: newTopicTitle, detail: '' });
                renderTopics();
            }
        });

        document.getElementById('lesson-form').addEventListener('submit', (e) => {
            e.preventDefault();
            lesson.title = document.getElementById('lesson-title').value;
            lesson.description = document.getElementById('lesson-desc').value;
            lesson.status = document.getElementById('lesson-status').value;
            saveData();
            alert('Ders kaydedildi!');
            renderLessonView(moduleIndex);
        });

        document.getElementById('delete-lesson-btn').addEventListener('click', () => {
            if (confirm(`'${lesson.title}' dersini silmek istediğinizden emin misiniz?`)) {
                data[moduleIndex].lessons.splice(lessonIndex, 1);
                saveData();
                renderLessonView(moduleIndex);
            }
        });
    };

    // Yeni Modül Ekle
    addModuleBtn.addEventListener('click', () => {
        const moduleName = prompt('Yeni modülün adını girin:');
        if (moduleName) {
            data.push({ name: moduleName, lessons: [] });
            saveData();
            renderUI();
        }
    });

    // Planı Dışa Aktar
    document.getElementById('export-plan-btn').addEventListener('click', () => {
        let exportContent = 'Fintech 101 Kurs Planı\n======================\n\n';
        data.forEach(module => {
            exportContent += `## Modül: ${module.name}\n\n`;
            module.lessons.forEach(lesson => {
                exportContent += `### Ders: ${lesson.title}\n`;
                exportContent += `**Açıklama:** ${lesson.description}\n`;
                exportContent += `**Durum:** ${lesson.status}\n\n`;
                if (lesson.topics && lesson.topics.length > 0) {
                    exportContent += `**Ana Konular:**\n`;
                    lesson.topics.forEach(topic => {
                        exportContent += `  - **${topic.title}**\n`;
                        if (topic.detail) {
                            exportContent += `    - Detay: ${topic.detail.replace(/\n/g, '\n      ')}\n`;
                        }
                    });
                    exportContent += '\n';
                }
            });
        });

        const blob = new Blob([exportContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Fintech101_Kurs_Plani.md';
        link.click();
    });

    // Başlangıç
    renderUI();
});
