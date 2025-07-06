import re

def parse_html_to_js_data(html_content):
    modules_data = []
    
    # Modülleri bul
    module_pattern = re.compile(r'<details class="module"[^>]*>\s*<summary>(.*?)</summary>\s*<ul>(.*?)</ul>\s*</details>', re.DOTALL)
    modules = module_pattern.findall(html_content)

    for module_name, lessons_html in modules:
        lessons_data = []
        
        # Dersleri bul
        # Ders satırı "<b>Başlık:</b> Açıklama" biçiminde olabilir
        lesson_pattern = re.compile(
            r'<li><label><input type="checkbox">\s*<span><b>([^<]+?)</b>[:]?\s*(.*?)</span></label></li>',
            re.DOTALL
        )
        lessons = lesson_pattern.findall(lessons_html)
        
        # Eğer dersler bulunamazsa, alt konuları doğrudan ders olarak kabul et (eski yapıya uyum için)
        if not lessons:
            # Try to parse topics as lessons if no clear lesson structure
            topic_only_lesson_pattern = re.compile(r'<li><label><input type="checkbox"> <span>(.*?)</span></label></li>', re.DOTALL)
            topic_only_lessons = topic_only_lesson_pattern.findall(lessons_html)
            for title in topic_only_lessons:
                # Split title into actual title and description if possible
                parts = title.split(':', 1)
                lesson_title = parts[0].strip()
                lesson_description = parts[1].strip() if len(parts) > 1 else ""
                
                # Extract topics from the description if they are listed with bullet points
                topics_list = []
                topic_lines = lesson_description.split('\n')
                current_detail = []
                current_title = ""

                for line in topic_lines:
                    line = line.strip()
                    if line.startswith('<i>') and line.endswith('</i>'):
                        # This is likely a topic title
                        if current_title and current_detail:
                            topics_list.append({'title': current_title, 'detail': ' '.join(current_detail).strip()})
                        current_title = line.replace('<i>', '').replace('</i>', '').strip()
                        current_detail = []
                    elif line:
                        current_detail.append(line)
                
                if current_title or current_detail:
                    topics_list.append({'title': current_title if current_title else lesson_title, 'detail': ' '.join(current_detail).strip() if current_detail else lesson_description})

                lessons_data.append({
                    'title': lesson_title,
                    'description': lesson_description,
                    'topics': topics_list,
                    'status': 'Planlandı'
                })
        else:
            for lesson_title_bold, lesson_description_raw in lessons:
                # Clean up bold tags from title
                lesson_title = lesson_title_bold.replace('<b>', '').replace('</b>', '').strip()
                
                # Extract description and potential topics
                description_parts = lesson_description_raw.split(':', 1)
                description = description_parts[1].strip() if len(description_parts) > 1 else lesson_description_raw.strip()
                
                # Remove HTML tags from description
                description = re.sub(r'<[^>]+>', '', description).strip()

                topics_list = []
                # Check for nested lists for topics
                nested_ul_match = re.search(r'<ul>(.*?)</ul>', lesson_description_raw, re.DOTALL)
                if nested_ul_match:
                    nested_li_pattern = re.compile(r'<li><i>(.*?)</i>: (.*?)</li>', re.DOTALL)
                    nested_topics = nested_li_pattern.findall(nested_ul_match.group(1))
                    for topic_title_raw, topic_detail_raw in nested_topics:
                        topics_list.append({
                            'title': re.sub(r'<[^>]+>', '', topic_title_raw).strip(),
                            'detail': re.sub(r'<[^>]+>', '', topic_detail_raw).strip()
                        })
                else:
                    # If no nested UL, try to extract topics from description if they are simple sentences
                    # This is a fallback and might not be perfect for all cases
                    # For now, we'll just put the description as a single topic if no structured topics are found
                    if description:
                        topics_list.append({'title': lesson_title, 'detail': description})


                lessons_data.append({
                    'title': lesson_title,
                    'description': description,
                    'topics': topics_list,
                    'status': 'Planlandı'
                })
        
        modules_data.append({
            'name': module_name.strip(),
            'lessons': lessons_data
        })
        
    return modules_data

# Read the HTML content from yeniveri.txt (assumes UTF-8 encoding)
with open('yeniveri.txt', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Parse the HTML
parsed_data = parse_html_to_js_data(html_content)

# Format as JavaScript array
js_output = "const defaultCourseData = [\n"
for module in parsed_data:
    js_output += "    {\n"
    js_output += f"        name: \"{module['name']}\",\n"
    js_output += "        lessons: [\n"
    for lesson in module['lessons']:
        js_output += "            {\n"
        js_output += f"                title: \"{lesson['title'].replace('"', '\"')}\",\n"
        js_output += f"                description: \"{lesson['description'].replace('"', '\"').replace('\n', '\\n')}\",\n"
        js_output += "                topics: [\n"
        for topic in lesson['topics']:
            js_output += "                    { title: \"" + topic['title'].replace('"', '\"') + "\", detail: \"" + topic['detail'].replace('"', '\"').replace('\n', '\\n') + "\" },\n"
        js_output += "                ],\n"
        js_output += f"                status: \"{lesson['status']}\"\n"
        js_output += "            },\n"
    js_output += "        ]\n"
    js_output += "    },\n"
js_output += "];\n"

with open('temp_data.js', 'w', encoding='utf-8') as outfile:
    outfile.write(js_output)
