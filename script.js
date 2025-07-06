document.addEventListener('DOMContentLoaded', () => {
    const moduleList = document.getElementById('module-list');
    const addModuleBtn = document.getElementById('add-module-btn');
    const lessonDetails = document.getElementById('lesson-details');

        const defaultCourseData = [
    {
        name: "Modül 1: Giriş ve Genel Bakış",
        lessons: [
            { 
                title: "Eğitim Serisinin Amacı ve Kapsamı", 
                description: "Bu seride ödeme sistemleri ve FinTech alanındaki temel kavramları, teknolojileri ve iş süreçlerini kapsamlı şekilde ele alacağız. Amaç, 14 yıllık sektörel deneyimim ışığında hem yeni başlayanlara hem de sektör profesyonellerine yönelik, pratik bilgi ve örneklerle dolu bir kaynak sunmaktır.", 
                topics: [
                    { title: "Serinin amacı", detail: "Katılımcılara, ödeme sistemleri ve FinTech dünyasının nasıl çalıştığına dair bütünsel bir bakış açısı kazandırmak." },
                    { title: "Kapsamlı içerik", detail: "Temel kavramlardan başlayarak, kartlı ödeme sistemleri, sanal POS, ödeme geçidi mimarisi, API entegrasyonları, risk yönetimi ve regülasyonlar gibi geniş bir yelpazeyi kapsar." },
                    { title: "Pratik bilgi ve örnekler", detail: "Teorik bilgileri, gerçek hayattan senaryolar, vaka analizleri ve canlı demolarla pekiştirerek kalıcı öğrenmeyi hedefler." },
                    { title: "Deneyime dayalı anlatım", detail: "14 yıllık sektör tecrübesiyle edinilmiş, kitaplarda yazmayan, kritik ve pratik bilgilerin aktarılması hedeflenmektedir." }
                ], 
                status: "Planlandı" 
            },
            { 
                title: "Hedef Kitle", 
                description: "Eğitim, ödeme sistemlerine ilgi duyan yazılımcılar, iş analistleri, ürün yöneticileri ve finans sektörü çalışanlarını hedeflemektedir. Konular, temel kavramlardan ileri düzey senaryolara doğru ilerleyerek, bilgi seviyesinden bağımsız herkesin faydalanabileceği şekilde tasarlanmıştır.", 
                topics: [
                    { title: "Yazılımcılar", detail: "Ödeme sistemleri entegrasyonu yapan veya yapmak isteyen, FinTech alanında kariyer hedefleyen developer'lar." },
                    { title: "İş analistleri", detail: "Finansal süreçleri analiz eden, gereksinim dokümanları hazırlayan ve teknik ekiplerle iş birimleri arasında köprü olan profesyoneller." },
                    { title: "Ürün yöneticileri", detail: "FinTech ürünleri geliştiren, yol haritası oluşturan ve ürünün başarısından sorumlu olan yöneticiler." },
                    { title: "Finans sektörü çalışanları", detail: "Geleneksel bankacılık veya finans alanında çalışıp, teknolojinin getirdiği değişimi anlamak ve kariyerini bu yönde geliştirmek isteyenler." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 2: Ödeme Sistemlerine Genel Bakış",
        lessons: [
            { 
                title: "Ödeme Sistemleri Nedir?", 
                description: "Ödeme sistemleri, para transferini ve işlemlerin sonuçlandırılmasını mümkün kılan teknolojik ve işlemsel altyapılardır. En basit ifadeyle, bir ödeme sisteminin görevi, bir tarafın gönderdiği ödemenin güvenli ve doğru şekilde diğer tarafa ulaşmasını sağlamaktır.", 
                topics: [
                    { title: "Tanım ve görev", detail: "Bir değerin (para) bir noktadan diğerine güvenli bir şekilde aktarılmasını sağlayan kurallar, kurumlar ve teknik altyapılar bütünüdür." },
                    { title: "Güvenli para transferi", detail: "Ödeme sistemlerinin temel amacı, transferin yetkilendirilmiş, kesintisiz ve manipülasyona kapalı bir şekilde gerçekleşmesini garanti etmektir." }
                ], 
                status: "Planlandı" 
            },
            { 
                title: "Ödeme Ekosisteminin Aktörleri", 
                description: "Bir ödeme işlemi pek çok taraf içerir. Temel aktörler arasında ödeme yapan (müşteri), ödeme alan (işyeri), aracı finansal kurumlar (bankalar, ödeme kuruluşları) ve altyapı sağlayıcıları (kart şemaları, takas merkezleri) sayılabilir.", 
                topics: [
                    { title: "Müşteri ve İşyeri", detail: "İşlemin iki ana tarafı. Müşteri (kart hamili) ödemeyi başlatır, İşyeri (üye işyeri/merchant) ödemeyi kabul eder." },
                    { title: "Issuer ve Acquirer Bankalar", detail: "Issuer, müşteriye kartı veren bankadır. Acquirer, işyerinin ödemeleri kabul etmesini sağlayan ve POS altyapısını sunan bankadır." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 3: Kartlı Ödeme Sistemleri",
        lessons: [
            { 
                title: "İşlem Akışı ve Onay (Authorization)", 
                description: "Bir kartlı ödemenin arka planda saniyeler içinde nasıl gerçekleştiğini, bilginin hangi yollardan gidip geldiğini ve onayın nasıl alındığını detaylıca inceler.", 
                topics: [
                    { title: "Authorization adımları", detail: "Kart bilgisinin POS'tan veya web sitesinden alınıp Acquirer'a, oradan kart şemasına, oradan da Issuer'a iletilmesi ve cevabın aynı yoldan geri dönmesi sürecidir." },
                    { title: "ISO 8583 standardı", detail: "Bankalar ve finansal kurumlar arasındaki kart işlem mesajlaşmalarında yaygın olarak kullanılan uluslararası bir standarttır. Ödeme geçitleri genellikle modern API'ları (JSON/REST) bu formata çevirir." }
                ], 
                status: "Planlandı" 
            },
            { 
                title: "3D Secure ve Güvenli Ödeme", 
                description: "Online ödemelerde sahtekarlığı önlemek için kullanılan 3D Secure protokolünün ne olduğunu, nasıl çalıştığını ve neden önemli olduğunu açıklar.", 
                topics: [
                    { title: "3D model (üç alan)", detail: "İsmini 3 Domain'den alır: Acquirer Domain (İşyeri ve bankası), Issuer Domain (Kart sahibi ve bankası) ve Interoperability Domain (İkisini birleştiren kart şeması)." },
                    { title: "3DS 2.0 ve yenilikleri", detail: "Daha akıcı bir kullanıcı deneyimi sunar. Risk skorlamasına göre müşteriyi şifre adımına hiç sokmadan (frictionless) işlemi onaylayabilir. Mobil uygulamalarla daha uyumludur." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 4: Sanal POS (Virtual POS)",
        lessons: [
            { 
                title: "Sanal POS Nedir?", 
                description: "Sanal POS, e-ticaret sitelerinin ve mobil uygulamaların kredi kartı, banka kartı, ön ödemeli kart veya sanal kartlar ile ödeme almasını sağlayan dijital bir ödeme aracıdır.", 
                topics: [
                    { title: "Dijital ödeme aracı", detail: "Fiziksel mağazalardaki POS cihazlarının internet ortamındaki karşılığıdır." },
                    { title: "Online işlem akışı", detail: "Kart bilgileri dijital olarak girilir ve işlem tamamen çevrimiçi gerçekleşir." }
                ], 
                status: "Planlandı" 
            },
            { 
                title: "Doğrudan Banka vs Ödeme Kuruluşu", 
                description: "Bir işletme sanal POS edinmek istediğinde iki temel yolu vardır: Her bankadan ayrı ayrı sanal POS almak veya bir ödeme kuruluşu (Payment Facilitator) aracılığıyla tek entegrasyonla birden çok bankanın altyapısına erişmek.", 
                topics: [
                    { title: "İki temel yol", detail: "Doğrudan banka ile çalışmak veya bir ödeme kuruluşu aracılığıyla hizmet almak." },
                    { title: "Tek entegrasyon kolaylığı", detail: "Ödeme kuruluşları, tek bir başvuru ile birçok bankanın sanal POS’unu kullanarak taksitli satış yapma imkanı sunar." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 5: Payment Gateway (Ödeme Geçidi) ve Mimari",
        lessons: [
            { 
                title: "Payment Gateway Nedir?", 
                description: "Ödeme geçidi, e-ticaret sitelerinin veya uygulamaların ödeme alabilmesini sağlayan, müşteri ile finansal kurumlar arasındaki trafiği yöneten teknoloji altyapısıdır.", 
                topics: [
                    { title: "Tanım ve görev", detail: "İşyeri ile bankalar arasındaki köprü veya aradağitıcı olarak görev yapar." },
                    { title: "Güvenli veri alışverişi", detail: "Kart bilgilerinin şifrelenmesi, bankaya iletilmesi, bankadan gelen yanıtın alınması ve işyerine iletilmesi gibi adımları otomatize eder." }
                ], 
                status: "Planlandı" 
            },
            { 
                title: "Entegrasyon Yöntemleri", 
                description: "Ödeme geçitleri, işyerlerine genellikle iki entegrasyon seçeneği sunar: Hosted Payment Page (Barındırılan ödeme sayfası) ve Direct API.", 
                topics: [
                    { title: "Hosted Payment Page", detail: "Müşteri, ödeme geçidinin sayfasına yönlenip ödemeyi tamamlar; kart verileri işyerinin sistemine hiç uğramaz." },
                    { title: "Direct API", detail: "İşyeri kendi arayüzünde kart bilgilerini alır ve arka planda ödeme geçidinin API’larına iletir." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 6: Ödeme Geçidi Özellikleri ve Örnek Senaryolar",
        lessons: [
            { 
                title: "Link ile Ödeme (Pay by Link)", 
                description: "Linkle ödeme, bir ödeme talebinin URL üzerinden iletilmesi yöntemidir. İşletme, müşterisine e-posta, SMS veya sosyal medya yoluyla özel bir ödeme linki gönderir.", 
                topics: [
                    { title: "URL ile ödeme talebi", detail: "Müşteri bu linke tıklayarak karşısına çıkan güvenli ödeme sayfasından işlemini tamamlar." },
                    { title: "Web sitesiz ödeme alma", detail: "Link ile ödeme, web sitesi olmasa bile uzaktan ödeme almayı mümkün kılar." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 7: Alternatif Ödeme Yöntemleri ve Entegrasyonları",
        lessons: [
            { 
                title: "Dijital Cüzdanlar (Mobil Cüzdanlar)", 
                description: "Klasik kart ödemelerine alternatif olarak, dijital cüzdanlar son yıllarda yaygınlık kazanmıştır. Örneğin Apple Pay, Google Pay, Samsung Pay gibi mobil cüzdanlar, kart bilgisini token olarak telefonda saklar.", 
                topics: [
                    { title: "Apple Pay, Google Pay", detail: "Kullanıcıya NFC veya online kullanımla hızlı ödeme imkanı verir." },
                    { title: "Tokenization", detail: "Kart bilgisinin token olarak telefonda saklanmasıdır." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 8: Entegrasyon ve API Kullanımı (Uygulamalı)",
        lessons: [
            { 
                title: "API Nedir ve RESTful Servisler", 
                description: "Ödeme sistemlerinde dış sistemlerle konuşmak için en yaygın yöntem REST API’lerdir. Bir ödeme geçidi, işyerlerine RESTful web servisleri sunarak ödeme işlemlerini almalarını sağlar.", 
                topics: [
                    { title: "API tanımı", detail: "Uygulamalar arası iletişime izin veren arayüz demektir." },
                    { title: "RESTful servisler", detail: "HTTP üzerinden JSON veya XML formatında veri alışverişi yapar." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 9: Operasyon, İzleme ve Destek",
        lessons: [
            { 
                title: "İşlem İzleme ve Gerçek Zamanlı Kontrol", 
                description: "Bir ödeme platformunu işletirken, tüm işlemlerin kesintisiz ve doğru şekilde ilerlediğinden emin olmak için sürekli izleme şarttır.", 
                topics: [
                    { title: "Gerçek zamanlı izleme", detail: "Ödemelerin güvenli, verimli ve hatasız işlenmesini sağlar." },
                    { title: "Anomali tespiti", detail: "Potansiyel sahtekarlıkları erkenden tespit etmeye yardımcı olur." }
                ], 
                status: "Planlandı" 
            }
        ]
    },
    {
        name: "Modül 10: Ürün Yönetimi ve Süreçler",
        lessons: [
            { 
                title: "Ödeme Ürünü Geliştirme Döngüsü", 
                description: "Bir ödeme sistemi ürününün (örneğin yeni bir özellik veya platform iyileştirmesi) geliştirilmesi belirli aşamalardan geçer. Önce fikir/ihiyaç doğar, ardından analiz edilir, geliştirilir, test edilir ve devreye alınır.", 
                topics: [
                    { title: "Fikir, analiz, geliştirme, test, lansman", detail: "Bir ürünün geliştirme aşamalarıdır." },
                    { title: "UAT ve pilot kullanım", detail: "Devreye almadan önce UAT (kabul testleri) yapılır, pilot müşteri ile denenir ve ardından genel kullanıma açılır." }
                ], 
                status: "Planlandı" 
            }
        ]
    }
];

    let data = JSON.parse(localStorage.getItem('fintech101Planner')) || defaultCourseData;

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