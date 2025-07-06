document.addEventListener('DOMContentLoaded', () => {
    const moduleList = document.getElementById('module-list');
    const addModuleBtn = document.getElementById('add-module-btn');
    const lessonDetails = document.getElementById('lesson-details');

const defaultCourseData = [
    {
        name: "Modül 1: Giriş ve Genel Bakış",
        lessons: [
            {
                title: "Eğitim Serisinin Amacı ve Kapsamı:",
                description: "Bu seride ödeme sistemleri ve FinTech alanındaki temel kavramları, teknolojileri ve iş süreçlerini kapsamlı şekilde ele alacağız. Amaç, 14 yıllık sektörel deneyimim ışığında hem yeni başlayanlara hem de sektör profesyonellerine yönelik, pratik bilgi ve örneklerle dolu bir kaynak sunmaktır.",
                topics: [
                    { title: "Eğitim Serisinin Amacı ve Kapsamı:", detail: "Bu seride ödeme sistemleri ve FinTech alanındaki temel kavramları, teknolojileri ve iş süreçlerini kapsamlı şekilde ele alacağız. Amaç, 14 yıllık sektörel deneyimim ışığında hem yeni başlayanlara hem de sektör profesyonellerine yönelik, pratik bilgi ve örneklerle dolu bir kaynak sunmaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Hedef Kitle:",
                description: "Eğitim, ödeme sistemlerine ilgi duyan yazılımcılar, iş analistleri, ürün yöneticileri ve finans sektörü çalışanlarını hedeflemektedir. Konular, temel kavramlardan ileri düzey senaryolara doğru ilerleyerek, bilgi seviyesinden bağımsız herkesin faydalanabileceği şekilde tasarlanmıştır.",
                topics: [
                    { title: "Hedef Kitle:", detail: "Eğitim, ödeme sistemlerine ilgi duyan yazılımcılar, iş analistleri, ürün yöneticileri ve finans sektörü çalışanlarını hedeflemektedir. Konular, temel kavramlardan ileri düzey senaryolara doğru ilerleyerek, bilgi seviyesinden bağımsız herkesin faydalanabileceği şekilde tasarlanmıştır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Eğitim Yöntemi:",
                description: "Her bir modül için 10-30 dakikalık videolar planlanmıştır. Videolarda konsept anlatımlarının yanı sıra gerçek ekran görüntüleri ve canlı demolar yer alacaktır. API entegrasyonları Postman gibi araçlarla gösterilecek, gerektiğinde kod seviyesinde örneklerle teknik detaylara değinilecektir. Bu HTML kılavuz ise videoları destekleyen, modüllere göre sıralanmış bir kontrol paneli ve not defteri işlevi görecektir.",
                topics: [
                    { title: "Eğitim Yöntemi:", detail: "Her bir modül için 10-30 dakikalık videolar planlanmıştır. Videolarda konsept anlatımlarının yanı sıra gerçek ekran görüntüleri ve canlı demolar yer alacaktır. API entegrasyonları Postman gibi araçlarla gösterilecek, gerektiğinde kod seviyesinde örneklerle teknik detaylara değinilecektir. Bu HTML kılavuz ise videoları destekleyen, modüllere göre sıralanmış bir kontrol paneli ve not defteri işlevi görecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Tema ve Modüler Yapı:",
                description: "Eğitim içeriği modüllere bölünmüştür. Örneğin, sanal POS nedir, kartlı ödeme sistemleri nasıl çalışır, bir ödeme geçidinin (Payment Gateway) mimarisi nasıldır gibi ana başlıklar altında alt konular checklist şeklinde sunulmuştur. Her modülün sonunda, anlatılanları pekiştirmek için kısa özetler ve önemli noktalar vurgulanacaktır.",
                topics: [
                    { title: "Tema ve Modüler Yapı:", detail: "Eğitim içeriği modüllere bölünmüştür. Örneğin, sanal POS nedir, kartlı ödeme sistemleri nasıl çalışır, bir ödeme geçidinin (Payment Gateway) mimarisi nasıldır gibi ana başlıklar altında alt konular checklist şeklinde sunulmuştur. Her modülün sonunda, anlatılanları pekiştirmek için kısa özetler ve önemli noktalar vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Tasarım ve Kullanım:",
                description: "Bu kılavuz, sade bir arayüze sahiptir ancak görsel unsurlarla desteklenmiştir. Her modül bir "detay" başlığı altında toplanmıştır ve ilgili alt konular onay kutuları (checkbox) ile listelenmiştir. İzleyiciler kendi öğrenme süreçlerini takip etmek için bu kutucukları işaretleyebilir. Ayrıca, önemli tanım ve süreçlerin yanı sıra dış kaynaklardan alıntılarla (referans bağlantıları şeklinde) destek sağlanmıştır.",
                topics: [
                    { title: "Tasarım ve Kullanım:", detail: "Bu kılavuz, sade bir arayüze sahiptir ancak görsel unsurlarla desteklenmiştir. Her modül bir "detay" başlığı altında toplanmıştır ve ilgili alt konular onay kutuları (checkbox) ile listelenmiştir. İzleyiciler kendi öğrenme süreçlerini takip etmek için bu kutucukları işaretleyebilir. Ayrıca, önemli tanım ve süreçlerin yanı sıra dış kaynaklardan alıntılarla (referans bağlantıları şeklinde) destek sağlanmıştır." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 2: Ödeme Sistemlerine Genel Bakış",
        lessons: [
            {
                title: "Ödeme Sistemleri Nedir?",
                description: "Ödeme sistemleri, para transferini ve işlemlerin sonuçlandırılmasını mümkün kılan teknolojik ve işlemsel altyapılardır. En basit ifadeyle, bir ödeme sisteminin görevi, bir tarafın gönderdiği ödemenin güvenli ve doğru şekilde diğer tarafa ulaşmasını sağlamaktır. Bu kapsamda kredi kartı, banka kartı, havale/EFT, elektronik para, çek ve benzeri araçların arkasındaki mekanizmalar birer ödeme sistemini oluşturur.",
                topics: [
                    { title: "Ödeme Sistemleri Nedir?", detail: "Ödeme sistemleri, para transferini ve işlemlerin sonuçlandırılmasını mümkün kılan teknolojik ve işlemsel altyapılardır. En basit ifadeyle, bir ödeme sisteminin görevi, bir tarafın gönderdiği ödemenin güvenli ve doğru şekilde diğer tarafa ulaşmasını sağlamaktır. Bu kapsamda kredi kartı, banka kartı, havale/EFT, elektronik para, çek ve benzeri araçların arkasındaki mekanizmalar birer ödeme sistemini oluşturur." },
                ],
                status: "Planlandı"
            },
            {
                title: "FinTech ve Ödeme Ekosistemi:",
                description: "Finansal Teknoloji (FinTech), finans hizmetlerinin teknolojiyle buluştuğu yenilikçi çözümleri ifade eder. Ödeme sistemleri, FinTech dünyasının en önemli alt alanlarından biridir. Son yıllarda dijital ödemelerdeki artış, yeni nesil cüzdanlar, mobil ödeme uygulamaları ve açık bankacılık girişimleri FinTech ekosistemini zenginleştirmiştir. Bu eğitimde, FinTech kavramının ödeme hizmetlerindeki etkisine ve sektördeki dönüşüme de değineceğiz.",
                topics: [
                    { title: "FinTech ve Ödeme Ekosistemi:", detail: "Finansal Teknoloji (FinTech), finans hizmetlerinin teknolojiyle buluştuğu yenilikçi çözümleri ifade eder. Ödeme sistemleri, FinTech dünyasının en önemli alt alanlarından biridir. Son yıllarda dijital ödemelerdeki artış, yeni nesil cüzdanlar, mobil ödeme uygulamaları ve açık bankacılık girişimleri FinTech ekosistemini zenginleştirmiştir. Bu eğitimde, FinTech kavramının ödeme hizmetlerindeki etkisine ve sektördeki dönüşüme de değineceğiz." },
                ],
                status: "Planlandı"
            },
            {
                title: "Ödeme Ekosisteminin Aktörleri:",
                description: "contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}. Bu aktörlerin rollerini ilerleyen modüllerde detaylandıracağız.",
                topics: [
                    { title: "Ödeme Ekosisteminin Aktörleri:", detail: "contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}. Bu aktörlerin rollerini ilerleyen modüllerde detaylandıracağız." },
                ],
                status: "Planlandı"
            },
            {
                title: "Türkiye’de Yasal Çerçeve (6493 Sayılı Kanun):",
                description: "contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}. Kanun, Ödeme Kuruluşu ve Elektronik Para Kuruluşu tanımlarını yapmış, bu kurumların faaliyet alanlarını ve yükümlülüklerini belirlemiştir. Eğitim boyunca regülasyonun getirdiği kısıtlar ve fırsatlara (ör. PCI DSS uyumu, tüketici hakları, güvenlik standartları) değinilecektir.",
                topics: [
                    { title: "Türkiye’de Yasal Çerçeve (6493 Sayılı Kanun):", detail: "contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}. Kanun, Ödeme Kuruluşu ve Elektronik Para Kuruluşu tanımlarını yapmış, bu kurumların faaliyet alanlarını ve yükümlülüklerini belirlemiştir. Eğitim boyunca regülasyonun getirdiği kısıtlar ve fırsatlara (ör. PCI DSS uyumu, tüketici hakları, güvenlik standartları) değinilecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Güvenlik ve Uyumluluk:",
                description: "contentReference[oaicite:4]{index=4}. 3D Secure gibi ek güvenlik protokolleri çevrimiçi ödemelerde sahteciliği azaltmayı hedefler (detayları ileride ele alınacak). Ayrıca, kara para aklamayı önleme (AML) ve müşterini tanı (KYC) gibi süreçler de ödeme kuruluşları için yasal bir gerekliliktir. Bu modülde, güvenli bir ödeme altyapısı kurmak için gereken temel prensipleri ve uyulması gereken standartları genel hatlarıyla gözden geçireceğiz.",
                topics: [
                    { title: "Güvenlik ve Uyumluluk:", detail: "contentReference[oaicite:4]{index=4}. 3D Secure gibi ek güvenlik protokolleri çevrimiçi ödemelerde sahteciliği azaltmayı hedefler (detayları ileride ele alınacak). Ayrıca, kara para aklamayı önleme (AML) ve müşterini tanı (KYC) gibi süreçler de ödeme kuruluşları için yasal bir gerekliliktir. Bu modülde, güvenli bir ödeme altyapısı kurmak için gereken temel prensipleri ve uyulması gereken standartları genel hatlarıyla gözden geçireceğiz." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 3: Kartlı Ödeme Sistemleri",
        lessons: [
            {
                title: "Kartlı Ödeme Ekosisteminin Unsurları:",
                description: "Kart Sahibi (müşteri), İş Yeri (Üye İşyeri), Kartı Çıkaran Banka (Issuer) ve İşyerinin Bankası (Acquirer). İşlem, işyerinin POS altyapısı üzerinden başlatılır ve kart bilgileri ödeme ağları üzerinden issuer bankaya iletilir. Issuer banka işlem tutarını onaylayınca bu onay ağı üzerinden tekrar POS’a ve işyerine ulaşır. Bu sayede müşteri alışverişi tamamlar, işyeri de ödemeyi alacağına dair garantiyi edinir.",
                topics: [
                    { title: "Kartlı Ödeme Ekosisteminin Unsurları:", detail: "Kart Sahibi (müşteri), İş Yeri (Üye İşyeri), Kartı Çıkaran Banka (Issuer) ve İşyerinin Bankası (Acquirer). İşlem, işyerinin POS altyapısı üzerinden başlatılır ve kart bilgileri ödeme ağları üzerinden issuer bankaya iletilir. Issuer banka işlem tutarını onaylayınca bu onay ağı üzerinden tekrar POS’a ve işyerine ulaşır. Bu sayede müşteri alışverişi tamamlar, işyeri de ödemeyi alacağına dair garantiyi edinir." },
                ],
                status: "Planlandı"
            },
            {
                title: "İşlem Akışı ve Onay (Authorization):",
                description: "(1) Müşteri kart bilgilerini girer veya kartını POS cihazından geçirir, (2) İşyerinin sistemi/ödeme geçidi bu bilgileri alarak kart ağları üzerinden bankaya iletir, (3) Kartın ait olduğu ağ (Visa, MasterCard, Troy vb.) ilgili issuer bankayı sorgular, (4) Issuer banka kartın geçerliliğini, limitini ve güvenlik kodlarını kontrol ederek onay veya ret cevabı döner, (5) Bu cevap aynı yolu izleyerek işyerine ulaşır ve işlem tamamlanır. Tüm bu süreç saniyeler içinde gerçekleşir. Kart ağı protokolleri genellikle ISO 8583 gibi standartlara dayanır ve ödeme geçitleri, web üzerindeki JSON isteklerini bankaların anlayacağı ISO 8583 mesajlarına dönüştürür:contentReference[oaicite:5]{index=5}:contentReference[oaicite:6]{index=6}.",
                topics: [
                    { title: "İşlem Akışı ve Onay (Authorization):", detail: "(1) Müşteri kart bilgilerini girer veya kartını POS cihazından geçirir, (2) İşyerinin sistemi/ödeme geçidi bu bilgileri alarak kart ağları üzerinden bankaya iletir, (3) Kartın ait olduğu ağ (Visa, MasterCard, Troy vb.) ilgili issuer bankayı sorgular, (4) Issuer banka kartın geçerliliğini, limitini ve güvenlik kodlarını kontrol ederek onay veya ret cevabı döner, (5) Bu cevap aynı yolu izleyerek işyerine ulaşır ve işlem tamamlanır. Tüm bu süreç saniyeler içinde gerçekleşir. Kart ağı protokolleri genellikle ISO 8583 gibi standartlara dayanır ve ödeme geçitleri, web üzerindeki JSON isteklerini bankaların anlayacağı ISO 8583 mesajlarına dönüştürür:contentReference[oaicite:5]{index=5}:contentReference[oaicite:6]{index=6}." },
                ],
                status: "Planlandı"
            },
            {
                title: "Kart Şemaları ve Yerel Ödeme Sistemleri:",
                description: "contentReference[oaicite:7]{index=7}. Bu modülde kart şemalarının işleyişi, üye işyeri komisyonları (MDR) ve interchange (banka arası takas) ücretleri gibi kavramlara değinilecek ve Troy gibi yerel girişimlerin önemi tartışılacaktır.",
                topics: [
                    { title: "Kart Şemaları ve Yerel Ödeme Sistemleri:", detail: "contentReference[oaicite:7]{index=7}. Bu modülde kart şemalarının işleyişi, üye işyeri komisyonları (MDR) ve interchange (banka arası takas) ücretleri gibi kavramlara değinilecek ve Troy gibi yerel girişimlerin önemi tartışılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Taksitli İşlemler Mantığı:",
                description: "contentReference[oaicite:8]{index=8}. Örneğin 10.000 TL tutarında bir işlemi 5 taksite böldüğünüzde, kartınızın 10.000 TL limitini anında kullanır ve her ay ~2.000 TL’lik ödeme yaparken o tutar kadar limitiniz serbest kalır. Bankalar, taksitli satışlar için işyerlerinden belirli komisyonlar alır. Eğer işyeri bu komisyonu fiyatına yansıtırsa tüketici toplam tutarı artırılmış görür (vade farkı); yansıtmazsa peşin fiyatına taksit imkânı sunmuş olur:contentReference[oaicite:9]{index=9}:contentReference[oaicite:10]{index=10}. Bu bölümde taksitlendirme süreçleri, bankaların uyguladığı vade farkları ve işyeri açısından maliyetleri ele alınacaktır.",
                topics: [
                    { title: "Taksitli İşlemler Mantığı:", detail: "contentReference[oaicite:8]{index=8}. Örneğin 10.000 TL tutarında bir işlemi 5 taksite böldüğünüzde, kartınızın 10.000 TL limitini anında kullanır ve her ay ~2.000 TL’lik ödeme yaparken o tutar kadar limitiniz serbest kalır. Bankalar, taksitli satışlar için işyerlerinden belirli komisyonlar alır. Eğer işyeri bu komisyonu fiyatına yansıtırsa tüketici toplam tutarı artırılmış görür (vade farkı); yansıtmazsa peşin fiyatına taksit imkânı sunmuş olur:contentReference[oaicite:9]{index=9}:contentReference[oaicite:10]{index=10}. Bu bölümde taksitlendirme süreçleri, bankaların uyguladığı vade farkları ve işyeri açısından maliyetleri ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "3D Secure ve Güvenli Ödeme:",
                description: "kart sahibi, işyeri (satıcı) ve kart çıkaran banka:contentReference[oaicite:11]{index=11}. Ödeme sırasında müşteri, bankasının sayfasına yönlendirilerek (veya açılan pencere üzerinden) SMS ile gelen tek kullanımlık şifreyi girer ya da mobil onay verir. Doğru kod girildiğinde banka işlemi onaylar ve bu bilgi ödeme akışına eklenir. 3D Secure, Visa tarafından “Verified by Visa” adıyla başlatılmış, MasterCard SecureCode vb. isimlerle tüm kart şemaları tarafından benimsenmiştir. Bu eğitimde 3DS 2.0 ile gelen yenilikler (örneğin friksiyonsuz doğrulama) ve entegrasyon yöntemleri de açıklanacaktır.",
                topics: [
                    { title: "3D Secure ve Güvenli Ödeme:", detail: "kart sahibi, işyeri (satıcı) ve kart çıkaran banka:contentReference[oaicite:11]{index=11}. Ödeme sırasında müşteri, bankasının sayfasına yönlendirilerek (veya açılan pencere üzerinden) SMS ile gelen tek kullanımlık şifreyi girer ya da mobil onay verir. Doğru kod girildiğinde banka işlemi onaylar ve bu bilgi ödeme akışına eklenir. 3D Secure, Visa tarafından “Verified by Visa” adıyla başlatılmış, MasterCard SecureCode vb. isimlerle tüm kart şemaları tarafından benimsenmiştir. Bu eğitimde 3DS 2.0 ile gelen yenilikler (örneğin friksiyonsuz doğrulama) ve entegrasyon yöntemleri de açıklanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Provizyon ve Takas (Clearing & Settlement):",
                description: "Bir kart işlemi onaylandığında işyeri tarafından provizyona alınır yani tutar bekleyen işlemler arasına girer. Genellikle gün sonlarında bankalar arası takas süreçleri işletilir; bu aşamada işlemlerin gerçekleştiği ağ üzerinden ilgili tutarlar işyerinin bankasına transfer edilir ve işyeri bakiyesine yansır. İşyerleri genelde ertesi gün veya anlaşmalarına göre birkaç gün içinde bu tutarları bankalarından tahsil eder. Bu modülde provizyon kavramı, batch işlemler, geri dönüşler (chargeback) ve itiraz süreçlerine giriş düzeyinde değinilecektir.",
                topics: [
                    { title: "Provizyon ve Takas (Clearing & Settlement):", detail: "Bir kart işlemi onaylandığında işyeri tarafından provizyona alınır yani tutar bekleyen işlemler arasına girer. Genellikle gün sonlarında bankalar arası takas süreçleri işletilir; bu aşamada işlemlerin gerçekleştiği ağ üzerinden ilgili tutarlar işyerinin bankasına transfer edilir ve işyeri bakiyesine yansır. İşyerleri genelde ertesi gün veya anlaşmalarına göre birkaç gün içinde bu tutarları bankalarından tahsil eder. Bu modülde provizyon kavramı, batch işlemler, geri dönüşler (chargeback) ve itiraz süreçlerine giriş düzeyinde değinilecektir." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 4: Sanal POS (Virtual POS)",
        lessons: [
            {
                title: "Sanal POS Nedir?",
                description: "contentReference[oaicite:15]{index=15}. Bir bakıma, fiziksel mağazalarda kullanılan POS cihazlarının internet ortamındaki karşılığıdır. Fiziksel POS’ta kart cihazla temas ederken, sanal POS’ta kart bilgileri dijital olarak girilir ve işlem tamamen çevrimiçi gerçekleşir. Sanal POS olmadan e-ticaret siteleri ödemeleri havale/EFT veya kapıda ödeme gibi yöntemlerle almak zorunda kalırdı ki bu yöntemler hem satıcı hem alıcı için daha riskli ve zahmetlidir:contentReference[oaicite:16]{index=16}.",
                topics: [
                    { title: "Sanal POS Nedir?", detail: "contentReference[oaicite:15]{index=15}. Bir bakıma, fiziksel mağazalarda kullanılan POS cihazlarının internet ortamındaki karşılığıdır. Fiziksel POS’ta kart cihazla temas ederken, sanal POS’ta kart bilgileri dijital olarak girilir ve işlem tamamen çevrimiçi gerçekleşir. Sanal POS olmadan e-ticaret siteleri ödemeleri havale/EFT veya kapıda ödeme gibi yöntemlerle almak zorunda kalırdı ki bu yöntemler hem satıcı hem alıcı için daha riskli ve zahmetlidir:contentReference[oaicite:16]{index=16}." },
                ],
                status: "Planlandı"
            },
            {
                title: "Sanal POS Nasıl Çalışır?",
                description: "contentReference[oaicite:17]{index=17}. İşlem onaylandığında tutar provizyona alınır; daha sonra anlaşmalı ödeme planına göre (genelde ertesi iş günü) işyerinin hesabına geçer, bu esnada banka komisyonu ve varsa sanal POS hizmet sağlayıcı ücreti kesilir:contentReference[oaicite:18]{index=18}.",
                topics: [
                    { title: "Sanal POS Nasıl Çalışır?", detail: "contentReference[oaicite:17]{index=17}. İşlem onaylandığında tutar provizyona alınır; daha sonra anlaşmalı ödeme planına göre (genelde ertesi iş günü) işyerinin hesabına geçer, bu esnada banka komisyonu ve varsa sanal POS hizmet sağlayıcı ücreti kesilir:contentReference[oaicite:18]{index=18}." },
                ],
                status: "Planlandı"
            },
            {
                title: "Doğrudan Banka vs Ödeme Kuruluşu:",
                description: "Her bankadan ayrı ayrı sanal POS almak veya bir ödeme kuruluşu (Payment Facilitator) aracılığıyla tek entegrasyonla birden çok bankanın altyapısına erişmek. Doğrudan banka ile çalışmak büyük işletmeler için tercih edilebilirken, özellikle KOBİ’ler için ödeme kuruluşları çok cazip çözümler sunar:contentReference[oaicite:19]{index=19}:contentReference[oaicite:20]{index=20}. Ödeme kuruluşları sayesinde tek bir başvuru ile birçok bankanın sanal POS’unu kullanarak taksitli satış yapabilir, bankalarla ayrı ayrı anlaşma yükünden kurtulurlar. Bu modülde PayTR, İyzico, PayU, etc. gibi Türkiye’de faaliyet gösteren ödeme kuruluşlarının sağladığı avantajlar ve doğrudan bankadan POS almanın gerektirdiği süreçler karşılaştırılacaktır.",
                topics: [
                    { title: "Doğrudan Banka vs Ödeme Kuruluşu:", detail: "Her bankadan ayrı ayrı sanal POS almak veya bir ödeme kuruluşu (Payment Facilitator) aracılığıyla tek entegrasyonla birden çok bankanın altyapısına erişmek. Doğrudan banka ile çalışmak büyük işletmeler için tercih edilebilirken, özellikle KOBİ’ler için ödeme kuruluşları çok cazip çözümler sunar:contentReference[oaicite:19]{index=19}:contentReference[oaicite:20]{index=20}. Ödeme kuruluşları sayesinde tek bir başvuru ile birçok bankanın sanal POS’unu kullanarak taksitli satış yapabilir, bankalarla ayrı ayrı anlaşma yükünden kurtulurlar. Bu modülde PayTR, İyzico, PayU, etc. gibi Türkiye’de faaliyet gösteren ödeme kuruluşlarının sağladığı avantajlar ve doğrudan bankadan POS almanın gerektirdiği süreçler karşılaştırılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Başvuru ve Kurulum Süreci:",
                description: "Sanal POS almak için genellikle işletmenin vergi levhası, imza sirküleri, banka hesap bilgileri gibi belgelerle başvuru yapması gerekir. Bankalar veya ödeme kuruluşları, başvuran işyerinin risk profiline (iş modeli, iade oranları, sektörel riskler) göre değerlendirme yapar. Onaylandığında işyerine test ortamı bilgileri sağlanır, entegrasyon tamamlandığında canlı kullanım açılır. Bu eğitimde örnek bir sanal POS başvuru süreci adım adım anlatılacak, dikkat edilmesi gereken noktalar (örneğin iade/iptal politikaları, güvenlik dökümanları) vurgulanacaktır.",
                topics: [
                    { title: "Başvuru ve Kurulum Süreci:", detail: "Sanal POS almak için genellikle işletmenin vergi levhası, imza sirküleri, banka hesap bilgileri gibi belgelerle başvuru yapması gerekir. Bankalar veya ödeme kuruluşları, başvuran işyerinin risk profiline (iş modeli, iade oranları, sektörel riskler) göre değerlendirme yapar. Onaylandığında işyerine test ortamı bilgileri sağlanır, entegrasyon tamamlandığında canlı kullanım açılır. Bu eğitimde örnek bir sanal POS başvuru süreci adım adım anlatılacak, dikkat edilmesi gereken noktalar (örneğin iade/iptal politikaları, güvenlik dökümanları) vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Sanal POS ve 3D Secure:",
                description: "API modeli (sunucu taraflı doğrulama) ve Gateway Redirect modeli (müşterinin banka sayfasına yönlenip geri dönmesi). Her iki yöntemin de avantajları/kısıtları bu bölümde teknik açıdan incelenecektir. Ayrıca 3DS olmadan gerçekleşen işlemlerin riskleri ve chargeback sorumlulukları da ele alınacaktır.",
                topics: [
                    { title: "Sanal POS ve 3D Secure:", detail: "API modeli (sunucu taraflı doğrulama) ve Gateway Redirect modeli (müşterinin banka sayfasına yönlenip geri dönmesi). Her iki yöntemin de avantajları/kısıtları bu bölümde teknik açıdan incelenecektir. Ayrıca 3DS olmadan gerçekleşen işlemlerin riskleri ve chargeback sorumlulukları da ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Sanal POS ve Komisyonlar:",
                description: "İşyeri ile banka/ödeme kuruluşu arasındaki anlaşmaya bağlı olarak her işlemden belirli bir komisyon kesilir. Bu komisyon oranı peşin ve taksitli işlemlerde farklı olabilir. Örneğin, peşin işlemlerde %X, taksitli işlemlerde %Y gibi. İşyeri cirosu arttıkça genelde daha düşük oranlar için pazarlık edebilir. Bazı ödeme kuruluşları tek oran politikası sunarak (ör. tüm bankalar için sabit %X) işyerine kolaylık sağlar. Bu modülde komisyon oranlarını etkileyen faktörler, ödeme kuruluşlarının gelir modeli ve özellikle taksitli işlemlerde bankaların komisyon yapıları incelenecektir.",
                topics: [
                    { title: "Sanal POS ve Komisyonlar:", detail: "İşyeri ile banka/ödeme kuruluşu arasındaki anlaşmaya bağlı olarak her işlemden belirli bir komisyon kesilir. Bu komisyon oranı peşin ve taksitli işlemlerde farklı olabilir. Örneğin, peşin işlemlerde %X, taksitli işlemlerde %Y gibi. İşyeri cirosu arttıkça genelde daha düşük oranlar için pazarlık edebilir. Bazı ödeme kuruluşları tek oran politikası sunarak (ör. tüm bankalar için sabit %X) işyerine kolaylık sağlar. Bu modülde komisyon oranlarını etkileyen faktörler, ödeme kuruluşlarının gelir modeli ve özellikle taksitli işlemlerde bankaların komisyon yapıları incelenecektir." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 5: Payment Gateway (Ödeme Geçidi) ve Mimari",
        lessons: [
            {
                title: "Payment Gateway Nedir?",
                description: "contentReference[oaicite:21]{index=21}. Ödeme geçidi, kart bilgilerinin şifrelenmesi, bankaya iletilmesi, bankadan gelen yanıtın alınması ve işyerine iletilmesi gibi adımları otomatize eder. Bu bölümde Payment Gateway kavramının temel tanımı ve diğer benzer kavramlarla (Payment Processor, PSP vs.) farkları açıklanacaktır.",
                topics: [
                    { title: "Payment Gateway Nedir?", detail: "contentReference[oaicite:21]{index=21}. Ödeme geçidi, kart bilgilerinin şifrelenmesi, bankaya iletilmesi, bankadan gelen yanıtın alınması ve işyerine iletilmesi gibi adımları otomatize eder. Bu bölümde Payment Gateway kavramının temel tanımı ve diğer benzer kavramlarla (Payment Processor, PSP vs.) farkları açıklanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Ödeme Geçidi Mimarisi:",
                description: "İşlem Yöneticisi (gelen ödeme isteğini işleyen mantık), Banka Bağlantı Modülleri (farklı bankaların sistemlerine entegre olan adaptorler), Veritabanı (işlemlerin kaydedildiği ve yönetildiği yer) ve Risk/Fraud Motoru (sahtecilik kontrolü yapan modül) gibi. Yüksek hacimli bir ödeme geçidi, ölçeklenebilir bir yapıdadır ve genellikle bulutta birden fazla sunucu üzerinde çalışır. Bu modülde, basit bir ödeme geçidi mimari diyagramı üzerinden bileşenlerin etkileşimi anlatılacak ve yüksek seviyede bir sistem tasarımı örneği sunulacaktır.",
                topics: [
                    { title: "Ödeme Geçidi Mimarisi:", detail: "İşlem Yöneticisi (gelen ödeme isteğini işleyen mantık), Banka Bağlantı Modülleri (farklı bankaların sistemlerine entegre olan adaptorler), Veritabanı (işlemlerin kaydedildiği ve yönetildiği yer) ve Risk/Fraud Motoru (sahtecilik kontrolü yapan modül) gibi. Yüksek hacimli bir ödeme geçidi, ölçeklenebilir bir yapıdadır ve genellikle bulutta birden fazla sunucu üzerinde çalışır. Bu modülde, basit bir ödeme geçidi mimari diyagramı üzerinden bileşenlerin etkileşimi anlatılacak ve yüksek seviyede bir sistem tasarımı örneği sunulacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Entegrasyon Yöntemleri:",
                description: "Hosted Payment Page (Barındırılan ödeme sayfası) ve Direct API. Barındırılan sayfa yönteminde müşteri, ödeme geçidinin sayfasına yönlenip ödemeyi tamamlar; kart verileri işyerinin sistemine hiç uğramaz. Direct API yönteminde ise işyeri kendi arayüzünde kart bilgilerini alır ve arka planda ödeme geçidinin API’larına iletir (bu durumda PCI DSS gerekliliklerine uyması gerekir). Her iki yaklaşımın artılarını/eksilerini ve kullanım senaryolarını bu bölümde değerlendireceğiz. Örneğin, PCI yükü taşımak istemeyen küçük işletmeler için barındırılan sayfa pratikken, özelleştirilmiş akış isteyen büyük platformlar API ile entegre olmayı tercih edebilir.",
                topics: [
                    { title: "Entegrasyon Yöntemleri:", detail: "Hosted Payment Page (Barındırılan ödeme sayfası) ve Direct API. Barındırılan sayfa yönteminde müşteri, ödeme geçidinin sayfasına yönlenip ödemeyi tamamlar; kart verileri işyerinin sistemine hiç uğramaz. Direct API yönteminde ise işyeri kendi arayüzünde kart bilgilerini alır ve arka planda ödeme geçidinin API’larına iletir (bu durumda PCI DSS gerekliliklerine uyması gerekir). Her iki yaklaşımın artılarını/eksilerini ve kullanım senaryolarını bu bölümde değerlendireceğiz. Örneğin, PCI yükü taşımak istemeyen küçük işletmeler için barındırılan sayfa pratikken, özelleştirilmiş akış isteyen büyük platformlar API ile entegre olmayı tercih edebilir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Güvenlik ve PCI DSS Uyumu:",
                description: "Bir ödeme geçidi inşa ederken veya kullanırken uyulması gereken en önemli standart PCI DSS’dir. Ödeme geçidi, kart verisini saklıyor veya iletiyorsa, en yüksek seviye olan Seviye 1 PCI DSS sertifikasyonuna sahip olmalıdır. Bu, veri şifreleme, ağ güvenliği, erişim kontrolü, düzenli testler gibi birçok gerekliliği içerir. Ödeme geçidi mimarisinde kart numaralarının mümkünse veritabanında tutulmaması, tokenizasyon yönteminin kullanılması önerilir. Ayrıca 3D Secure, CVV kontrolü gibi ek güvenlik adımları da ödeme geçidinin ayrılmaz parçasıdır. Bu bölümde PCI DSS maddeleri kısaca özetlenecek ve güvenli bir ödeme akışı oluşturmak için alınması gereken önlemler tartışılacaktır.",
                topics: [
                    { title: "Güvenlik ve PCI DSS Uyumu:", detail: "Bir ödeme geçidi inşa ederken veya kullanırken uyulması gereken en önemli standart PCI DSS’dir. Ödeme geçidi, kart verisini saklıyor veya iletiyorsa, en yüksek seviye olan Seviye 1 PCI DSS sertifikasyonuna sahip olmalıdır. Bu, veri şifreleme, ağ güvenliği, erişim kontrolü, düzenli testler gibi birçok gerekliliği içerir. Ödeme geçidi mimarisinde kart numaralarının mümkünse veritabanında tutulmaması, tokenizasyon yönteminin kullanılması önerilir. Ayrıca 3D Secure, CVV kontrolü gibi ek güvenlik adımları da ödeme geçidinin ayrılmaz parçasıdır. Bu bölümde PCI DSS maddeleri kısaca özetlenecek ve güvenli bir ödeme akışı oluşturmak için alınması gereken önlemler tartışılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Ödeme Geçidinin Özellikleri:",
                description: "Tek Tıkla Ödeme (Kart Saklama): Müşterilerin kart bilgilerinin güvenli şekilde saklanarak sonraki alışverişlerinde yeniden girmelerine gerek kalmaması.\n        Tefrika İşlemler: Ön provizyon (auth) alma ve daha sonra kısmi veya tam tutar çekme (capture) desteği. Bu özellikle otel, araç kiralama gibi sektörlerde kullanılır.\n        Yinelenen Ödemeler (Abonelik): Belirli periyotlarla otomatik tahsilat (örn. aylık abonelik ücretleri) yapabilme.\n        İade ve İptal: İşlemlerin kısmi veya tam iadesini yapma, gerektiğinde provizyonu iptal etme yeteneği.\n        Raporlama ve Dashboard: İşyerine işlemlerini gerçek zamanlı izleyebileceği, rapor alabileceği bir arayüz sunma.\n      \n      Bu alt özellikler, ödeme geçidinin yazılımına değer katan bileşenlerdir. Bu modülde örnek bir ödeme geçidi ürününün sahip olduğu ekstra kabiliyetler incelenecek, mümkün olduğunca canlı demolarla gösterilecektir.",
                topics: [
                ],
                status: "Planlandı"
            },
            {
                title: "Ödeme Geçidi vs. Ödeme İşlemcisi:",
                description: "Sık karıştırılan iki kavram olan Payment Gateway (Ödeme Geçidi) ve Payment Processor (Ödeme İşleyicisi) arasındaki farklara değineceğiz. Basitçe, ödeme geçidi işyeriyle bankalar arasındaki yazılım köprüsü iken, ödeme işlemcisi bankalar arası takas ve para hareketini fiilen gerçekleştiren finansal kuruluştur. Örneğin, bir e-ticaret sitesi Stripe kullanıyorsa, Stripe bir ödeme geçididir; ancak Stripe işlemi arka planda bir işlemci (acquirer işlemci) üzerinden sonlandırır. Bu farklı rolleri anlamak, özellikle arıza durumlarında veya ücretlendirme yapısını incelerken önemlidir.",
                topics: [
                    { title: "Ödeme Geçidi vs. Ödeme İşlemcisi:", detail: "Sık karıştırılan iki kavram olan Payment Gateway (Ödeme Geçidi) ve Payment Processor (Ödeme İşleyicisi) arasındaki farklara değineceğiz. Basitçe, ödeme geçidi işyeriyle bankalar arasındaki yazılım köprüsü iken, ödeme işlemcisi bankalar arası takas ve para hareketini fiilen gerçekleştiren finansal kuruluştur. Örneğin, bir e-ticaret sitesi Stripe kullanıyorsa, Stripe bir ödeme geçididir; ancak Stripe işlemi arka planda bir işlemci (acquirer işlemci) üzerinden sonlandırır. Bu farklı rolleri anlamak, özellikle arıza durumlarında veya ücretlendirme yapısını incelerken önemlidir." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 6: Ödeme Geçidi Özellikleri ve Örnek Senaryolar",
        lessons: [
            {
                title: "Manuel Ödeme (Virtual Terminal):",
                description: "contentReference[oaicite:22]{index=22}. Örneğin bir call-center operatörü, müşteriden kart bilgilerini öğrenip sanal POS ekranına girerek ödeme çekebilir. Manuel ödeme özelliği, özellikle telefonla sipariş alan veya ofisinden ödeme talep eden işletmeler için önemlidir. Bu bölümde sanal terminal kullanımı, güvenlik açısından dikkat edilmesi gerekenler (kart bilgisi yazıyla alınırken güvenlik, ses kayıtlarının maskelenmesi gibi) anlatılacaktır.",
                topics: [
                    { title: "Manuel Ödeme (Virtual Terminal):", detail: "contentReference[oaicite:22]{index=22}. Örneğin bir call-center operatörü, müşteriden kart bilgilerini öğrenip sanal POS ekranına girerek ödeme çekebilir. Manuel ödeme özelliği, özellikle telefonla sipariş alan veya ofisinden ödeme talep eden işletmeler için önemlidir. Bu bölümde sanal terminal kullanımı, güvenlik açısından dikkat edilmesi gerekenler (kart bilgisi yazıyla alınırken güvenlik, ses kayıtlarının maskelenmesi gibi) anlatılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Link ile Ödeme (Pay by Link):",
                description: "contentReference[oaicite:23]{index=23}. Link ile ödeme, web sitesi olmasa bile uzaktan ödeme almayı mümkün kılar:contentReference[oaicite:24]{index=24}. Örneğin bir Instagram satıcısı, müşteriyle anlaşıp ona SMS ile bir ödeme bağlantısı gönderebilir. Müşteri bu sayfada kart bilgilerini girip ödemeyi yapar ve hem müşteri hem satıcı onay bildirimlerini alır. Bu modülde linkle ödemenin kurulumu (ödeme geçidi panelinden link oluşturma), link ödemelerinde tutar sabitleme veya müşterinin girmesine izin verme gibi seçenekler ve bu yöntemin avantajları (kolaylık, güvenlik) ile dezavantajları (linkin süreli olması, güven telkin etme gereksinimi) ele alınacaktır.",
                topics: [
                    { title: "Link ile Ödeme (Pay by Link):", detail: "contentReference[oaicite:23]{index=23}. Link ile ödeme, web sitesi olmasa bile uzaktan ödeme almayı mümkün kılar:contentReference[oaicite:24]{index=24}. Örneğin bir Instagram satıcısı, müşteriyle anlaşıp ona SMS ile bir ödeme bağlantısı gönderebilir. Müşteri bu sayfada kart bilgilerini girip ödemeyi yapar ve hem müşteri hem satıcı onay bildirimlerini alır. Bu modülde linkle ödemenin kurulumu (ödeme geçidi panelinden link oluşturma), link ödemelerinde tutar sabitleme veya müşterinin girmesine izin verme gibi seçenekler ve bu yöntemin avantajları (kolaylık, güvenlik) ile dezavantajları (linkin süreli olması, güven telkin etme gereksinimi) ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Parçalı Ödeme (Çoklu Kart ile Ödeme):",
                description: "contentReference[oaicite:25]{index=25}. Örneğin 10.000 TL’lik bir alışverişte müşteri 5.000 TL’sini bir kredi kartıyla, kalan 5.000 TL’sini başka bir kartla ödeyebilir. Parçalı ödeme özelliği, müşteri memnuniyetini artırır ve satışın gerçekleşme olasılığını yükseltir (limit engeline takılan satışların kurtarılması). Bu bölümde parçalı ödemenin nasıl uygulanabileceği, arka planda ödeme geçidinin bu çoklu işlemleri tek sipariş ile ilişkilendirmesi ve olası riskler (örneğin ilk kart ödeme geçer ikincisi geçmezse senaryo yönetimi) anlatılacaktır.",
                topics: [
                    { title: "Parçalı Ödeme (Çoklu Kart ile Ödeme):", detail: "contentReference[oaicite:25]{index=25}. Örneğin 10.000 TL’lik bir alışverişte müşteri 5.000 TL’sini bir kredi kartıyla, kalan 5.000 TL’sini başka bir kartla ödeyebilir. Parçalı ödeme özelliği, müşteri memnuniyetini artırır ve satışın gerçekleşme olasılığını yükseltir (limit engeline takılan satışların kurtarılması). Bu bölümde parçalı ödemenin nasıl uygulanabileceği, arka planda ödeme geçidinin bu çoklu işlemleri tek sipariş ile ilişkilendirmesi ve olası riskler (örneğin ilk kart ödeme geçer ikincisi geçmezse senaryo yönetimi) anlatılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Yinelenen Ödemeler ve Abonelik:",
                description: "Abonelik tabanlı hizmet sunan iş modelleri için, ödeme geçidinin tekrarlı ödeme desteği kritik bir özelliktir. Bu özellik sayesinde ilk ödeme sonrasında kart bilgileri güvenli biçimde saklanır (tokenize edilir) ve her abonelik döneminde (aylık, yıllık vb.) otomatik olarak kartdan çekim yapılır. Kullanıcıya her seferinde işlem yapmak gerekmez. Bu bölümde örnek bir abonelik akışı (örn. aylık dergi üyeliği) incelenecek, ödeme geçidinde bunun nasıl kurulduğu (plan tanımları, cron joblar veya webhook’larla çekim) ve olası sorunlar (kartın son kullanma tarihi geçmesi, yetersiz limit, aboneliği iptal etme) üzerinde durulacaktır.",
                topics: [
                    { title: "Yinelenen Ödemeler ve Abonelik:", detail: "Abonelik tabanlı hizmet sunan iş modelleri için, ödeme geçidinin tekrarlı ödeme desteği kritik bir özelliktir. Bu özellik sayesinde ilk ödeme sonrasında kart bilgileri güvenli biçimde saklanır (tokenize edilir) ve her abonelik döneminde (aylık, yıllık vb.) otomatik olarak kartdan çekim yapılır. Kullanıcıya her seferinde işlem yapmak gerekmez. Bu bölümde örnek bir abonelik akışı (örn. aylık dergi üyeliği) incelenecek, ödeme geçidinde bunun nasıl kurulduğu (plan tanımları, cron joblar veya webhook’larla çekim) ve olası sorunlar (kartın son kullanma tarihi geçmesi, yetersiz limit, aboneliği iptal etme) üzerinde durulacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Ödeme Sayfası Özelleştirmeleri:",
                description: "İşyerleri, ödeme sayfalarının tasarımını ve dilini kendi müşterilerine uygun şekilde özelleştirmek isteyebilir. Birçok ödeme geçidi, marka logosu ekleme, renkleri düzenleme, dil seçimi gibi seçenekler sunar. Ayrıca, ödeme sayfasında taksit seçeneklerini gösterme, kampanya kodu alanı ekleme, kredi kartı puan kullanımı entegrasyonu gibi gelişmiş özellikler de olabilir. Bu bölümde bir ödeme geçidinin tipik ödeme sayfası ekranı gösterilecek ve bu ekranın işyeri ihtiyacına göre nasıl özelleştirilebileceği (örneğin iFrame ile sayfaya gömme veya yönlendirmeli sayfada CSS ile düzenleme) anlatılacaktır.",
                topics: [
                    { title: "Ödeme Sayfası Özelleştirmeleri:", detail: "İşyerleri, ödeme sayfalarının tasarımını ve dilini kendi müşterilerine uygun şekilde özelleştirmek isteyebilir. Birçok ödeme geçidi, marka logosu ekleme, renkleri düzenleme, dil seçimi gibi seçenekler sunar. Ayrıca, ödeme sayfasında taksit seçeneklerini gösterme, kampanya kodu alanı ekleme, kredi kartı puan kullanımı entegrasyonu gibi gelişmiş özellikler de olabilir. Bu bölümde bir ödeme geçidinin tipik ödeme sayfası ekranı gösterilecek ve bu ekranın işyeri ihtiyacına göre nasıl özelleştirilebileceği (örneğin iFrame ile sayfaya gömme veya yönlendirmeli sayfada CSS ile düzenleme) anlatılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Örnek Senaryo - Online Mağaza:",
                description: "Bu alt başlıkta, yukarıda bahsedilen özelliklerin bir arada kullanıldığı kapsamlı bir senaryo üzerinden gideceğiz. Örneğin, bir online satış sitesinde müşteri sepetine ürün ekler, ödeme adımında kayıtlı kartını seçerek (tek tıkla ödeme) hızlıca öder, aynı zamanda bir abonelik ürünüyse ileriki ödemeleri otomatik olur, eğer sepet tutarı yüksekse ödeme linki ile sonradan ödeme opsiyonu sunulur vb. Bu senaryo üzerinden, modül 6’da anlatılan kavramların gerçek hayatta nasıl bir akış oluşturduğunu pekiştireceğiz.",
                topics: [
                    { title: "Örnek Senaryo - Online Mağaza:", detail: "Bu alt başlıkta, yukarıda bahsedilen özelliklerin bir arada kullanıldığı kapsamlı bir senaryo üzerinden gideceğiz. Örneğin, bir online satış sitesinde müşteri sepetine ürün ekler, ödeme adımında kayıtlı kartını seçerek (tek tıkla ödeme) hızlıca öder, aynı zamanda bir abonelik ürünüyse ileriki ödemeleri otomatik olur, eğer sepet tutarı yüksekse ödeme linki ile sonradan ödeme opsiyonu sunulur vb. Bu senaryo üzerinden, modül 6’da anlatılan kavramların gerçek hayatta nasıl bir akış oluşturduğunu pekiştireceğiz." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 7: Alternatif Ödeme Yöntemleri ve Entegrasyonları",
        lessons: [
            {
                title: "Dijital Cüzdanlar (Mobil Cüzdanlar):",
                description: "Klasik kart ödemelerine alternatif olarak, dijital cüzdanlar son yıllarda yaygınlık kazanmıştır. Örneğin Apple Pay, Google Pay, Samsung Pay gibi mobil cüzdanlar, kart bilgisini token olarak telefonda saklar ve kullanıcıya NFC veya online kullanımla hızlı ödeme imkanı verir. Türkiye’de yakın zamanda Apple Pay desteği bazı bankalar tarafından sunulmaya başladı. Benzer şekilde, bankaların kendi cüzdan uygulamaları (örn. Yapı Kredi Pay, Maximum Mobil cüzdan vb.) bulunmaktadır. Bu bölümde dijital cüzdanların çalışma prensibi, ödeme geçitlerine entegrasyonu (ör. Apple Pay entegrasyonu için gerekli sertifikalar, sunucu tarafında doğrulama işlemleri) ve son kullanıcı deneyimi ele alınacaktır.",
                topics: [
                    { title: "Dijital Cüzdanlar (Mobil Cüzdanlar):", detail: "Klasik kart ödemelerine alternatif olarak, dijital cüzdanlar son yıllarda yaygınlık kazanmıştır. Örneğin Apple Pay, Google Pay, Samsung Pay gibi mobil cüzdanlar, kart bilgisini token olarak telefonda saklar ve kullanıcıya NFC veya online kullanımla hızlı ödeme imkanı verir. Türkiye’de yakın zamanda Apple Pay desteği bazı bankalar tarafından sunulmaya başladı. Benzer şekilde, bankaların kendi cüzdan uygulamaları (örn. Yapı Kredi Pay, Maximum Mobil cüzdan vb.) bulunmaktadır. Bu bölümde dijital cüzdanların çalışma prensibi, ödeme geçitlerine entegrasyonu (ör. Apple Pay entegrasyonu için gerekli sertifikalar, sunucu tarafında doğrulama işlemleri) ve son kullanıcı deneyimi ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "QR Kod ile Ödeme:",
                description: "QR kod tabanlı ödemeler, özellikle mobil bankacılık uygulamaları sayesinde popüler hale gelmiştir. Türkiye’de FAST sistemi ile birlikte gelen Kolay Adres ve TR Karekod standartları sayesinde, bir satıcı QR kod oluşturup müşterinin bunu okutarak ödeme yapmasını sağlayabilir. Bu, kart kullanılmayan bir alternatif ödeme yöntemidir. Bu bölümde örnek bir QR ile ödeme akışı (müşteri telefondan satıcının QR’ını okur, onaylar, para transferi gerçekleşir) anlatılacak ve ödeme geçitlerinin QR ödemeleri destekleme yöntemleri (örneğin Paycell, BKM Express gibi servislerin entegrasyonu) üzerinde durulacaktır.",
                topics: [
                    { title: "QR Kod ile Ödeme:", detail: "QR kod tabanlı ödemeler, özellikle mobil bankacılık uygulamaları sayesinde popüler hale gelmiştir. Türkiye’de FAST sistemi ile birlikte gelen Kolay Adres ve TR Karekod standartları sayesinde, bir satıcı QR kod oluşturup müşterinin bunu okutarak ödeme yapmasını sağlayabilir. Bu, kart kullanılmayan bir alternatif ödeme yöntemidir. Bu bölümde örnek bir QR ile ödeme akışı (müşteri telefondan satıcının QR’ını okur, onaylar, para transferi gerçekleşir) anlatılacak ve ödeme geçitlerinin QR ödemeleri destekleme yöntemleri (örneğin Paycell, BKM Express gibi servislerin entegrasyonu) üzerinde durulacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Havale/EFT ve FAST Entegrasyonu:",
                description: "Klasik banka havalesi veya EFT ile ödeme alma, e-ticarette genelde manuel kontrol gerektirir (müşteri ücreti havale eder, satıcı kontrol eder). Ancak yeni nesil ödeme sistemlerinde bu süreç otomatik hale getirilebilmektedir. Örneğin, ödeme kuruluşları müşteriye bir referans kodu vererek belirtilen hesaba havale yapmasını ister; sistem havaleyi gerçek zamanlı takip ederek ödeme tamamlandığında siparişi onaylar. FAST (Fonların Anlık ve Sürekli Transferi) ile birlikte 7/24 anlık para transferi mümkün olduğundan bu yöntem daha da kullanışlı hale gelmiştir. Bu bölümde ödeme geçidi üzerinden otomatik havale ile ödeme alma senaryosu ve bunun gerektirdiği entegrasyonlar (bankaların API’leri veya swift mesaj izleme) ele alınacaktır.",
                topics: [
                    { title: "Havale/EFT ve FAST Entegrasyonu:", detail: "Klasik banka havalesi veya EFT ile ödeme alma, e-ticarette genelde manuel kontrol gerektirir (müşteri ücreti havale eder, satıcı kontrol eder). Ancak yeni nesil ödeme sistemlerinde bu süreç otomatik hale getirilebilmektedir. Örneğin, ödeme kuruluşları müşteriye bir referans kodu vererek belirtilen hesaba havale yapmasını ister; sistem havaleyi gerçek zamanlı takip ederek ödeme tamamlandığında siparişi onaylar. FAST (Fonların Anlık ve Sürekli Transferi) ile birlikte 7/24 anlık para transferi mümkün olduğundan bu yöntem daha da kullanışlı hale gelmiştir. Bu bölümde ödeme geçidi üzerinden otomatik havale ile ödeme alma senaryosu ve bunun gerektirdiği entegrasyonlar (bankaların API’leri veya swift mesaj izleme) ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Mobil Operatör Ödemeleri (Direct Carrier Billing):",
                description: "Özellikle dijital içerik ve servis satışlarında, kullanıcıların cep telefonu faturalarını veya kontör bakiyelerini kullanarak ödeme yapmaları bir alternatiftir. Türkiye’de mobil operatör faturalandırması (örneğin Turkcell Mobil Ödeme gibi) ile kullanıcılar kredi kartı olmadan telefon numarasıyla ödeme yapabilir. Ödeme tutarı telefon faturalarına yansır. Bu bölümde mobil operatör ödeme sistemlerinin genel işleyişi, limitleri, komisyon yapıları ve ödeme geçidine entegrasyonu (operatörlerin sağladığı API’lar aracılığıyla) anlatılacaktır.",
                topics: [
                    { title: "Mobil Operatör Ödemeleri (Direct Carrier Billing):", detail: "Özellikle dijital içerik ve servis satışlarında, kullanıcıların cep telefonu faturalarını veya kontör bakiyelerini kullanarak ödeme yapmaları bir alternatiftir. Türkiye’de mobil operatör faturalandırması (örneğin Turkcell Mobil Ödeme gibi) ile kullanıcılar kredi kartı olmadan telefon numarasıyla ödeme yapabilir. Ödeme tutarı telefon faturalarına yansır. Bu bölümde mobil operatör ödeme sistemlerinin genel işleyişi, limitleri, komisyon yapıları ve ödeme geçidine entegrasyonu (operatörlerin sağladığı API’lar aracılığıyla) anlatılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "BNPL ve Alışveriş Kredileri:",
                description: "“Şimdi al, sonra öde” (Buy Now Pay Later - BNPL) hizmetleri de bir alternatif ödeme yöntemidir. Ülkemizde bazı platformlar (örn. OdemeX Alışveriş Kredisi gibi) müşteriye anında kredi imkânı sunarak alışverişin kredi ile taksitlendirilmesini sağlar. Bu, aslında bir tüketici kredisi süreci olsa da ödeme sırasında alternatif bir seçenek olarak çıkmaktadır. Bu bölümde BNPL modelleri, yurt dışındaki örnekler (Klarna, Afterpay vb.) ve Türkiye’deki uygulamalar (ör. bankaların anında taksitli kredi seçenekleri) incelenecek, bunların ödeme sistemine entegrasyon mantığı (genellikle bir API çağrısıyla kredi skorunun alınması ve onaylanan tutarın satıcıya ödenmesi) özetlenecektir.",
                topics: [
                    { title: "BNPL ve Alışveriş Kredileri:", detail: "“Şimdi al, sonra öde” (Buy Now Pay Later - BNPL) hizmetleri de bir alternatif ödeme yöntemidir. Ülkemizde bazı platformlar (örn. OdemeX Alışveriş Kredisi gibi) müşteriye anında kredi imkânı sunarak alışverişin kredi ile taksitlendirilmesini sağlar. Bu, aslında bir tüketici kredisi süreci olsa da ödeme sırasında alternatif bir seçenek olarak çıkmaktadır. Bu bölümde BNPL modelleri, yurt dışındaki örnekler (Klarna, Afterpay vb.) ve Türkiye’deki uygulamalar (ör. bankaların anında taksitli kredi seçenekleri) incelenecek, bunların ödeme sistemine entegrasyon mantığı (genellikle bir API çağrısıyla kredi skorunun alınması ve onaylanan tutarın satıcıya ödenmesi) özetlenecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Kripto Paralar ile Ödeme:",
                description: "FinTech ekosisteminin en yeni alternatiflerinden biri de kripto para ile ödemelerdir. Her ne kadar regülasyonlar gereği Türkiye’de doğrudan mal/hizmet satışında kripto kullanımına izin verilmese de, global ölçekte bazı ödeme sağlayıcıları Bitcoin, Ethereum gibi kripto paralarla ödemeyi desteklemektedir. Bu bölümde, kripto ödeme geçitlerinin çalışma şekli, anlık kur dönüşümü, cüzdan entegrasyonu gibi konulara yüzeysel de olsa değinilecek ve geleceğe yönelik bu alanın potansiyeli tartışılacaktır.",
                topics: [
                    { title: "Kripto Paralar ile Ödeme:", detail: "FinTech ekosisteminin en yeni alternatiflerinden biri de kripto para ile ödemelerdir. Her ne kadar regülasyonlar gereği Türkiye’de doğrudan mal/hizmet satışında kripto kullanımına izin verilmese de, global ölçekte bazı ödeme sağlayıcıları Bitcoin, Ethereum gibi kripto paralarla ödemeyi desteklemektedir. Bu bölümde, kripto ödeme geçitlerinin çalışma şekli, anlık kur dönüşümü, cüzdan entegrasyonu gibi konulara yüzeysel de olsa değinilecek ve geleceğe yönelik bu alanın potansiyeli tartışılacaktır." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 8: Entegrasyon ve API Kullanımı (Uygulamalı)",
        lessons: [
            {
                title: "API Nedir ve RESTful Servisler:",
                description: "Ödeme sistemlerinde dış sistemlerle konuşmak için en yaygın yöntem REST API’lerdir. Bir ödeme geçidi, işyerlerine RESTful web servisleri sunarak ödeme işlemlerini almalarını sağlar. API kavramı, uygulamalar arası iletişime izin veren arayüz demektir. REST API’ler HTTP üzerinden JSON veya XML formatında veri alışverişi yapar. Bu bölümde kısaca API kavramı, istek (request) ve yanıt (response) yapıları, HTTPS ve JSON kullanımı gibi temel bilgiler verilecek. Hedef, daha sonra yapacağımız gerçek entegrasyon örnekleri için gereken altyapıyı hazırlamaktır.",
                topics: [
                    { title: "API Nedir ve RESTful Servisler:", detail: "Ödeme sistemlerinde dış sistemlerle konuşmak için en yaygın yöntem REST API’lerdir. Bir ödeme geçidi, işyerlerine RESTful web servisleri sunarak ödeme işlemlerini almalarını sağlar. API kavramı, uygulamalar arası iletişime izin veren arayüz demektir. REST API’ler HTTP üzerinden JSON veya XML formatında veri alışverişi yapar. Bu bölümde kısaca API kavramı, istek (request) ve yanıt (response) yapıları, HTTPS ve JSON kullanımı gibi temel bilgiler verilecek. Hedef, daha sonra yapacağımız gerçek entegrasyon örnekleri için gereken altyapıyı hazırlamaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Test Ortamı ve Sandbox Kullanımı:",
                description: "Yeni bir ödeme entegrasyonu geliştirirken, gerçek para akışı olmadan işlemleri denemek için sandbox (test ortamı) kullanılır. Ödeme sağlayıcıları genelde işyerine test API anahtarı, test kart numaraları gibi bilgiler sağlar. Bu modülde örnek bir ödeme kuruluşunun test paneline giriş yapılarak API anahtarı nasıl alınır gösterilecek, sandbox ortamında hangi kart numaraları ile hangi senaryoların test edilebileceği (örn. başarısız işlem senaryosu için belirli bir tutar kullanma) anlatılacaktır. Test ortamında 3D Secure simülasyonu, provizyon ve iade testleri gibi adımlar uygulamalı olarak gösterilecektir.",
                topics: [
                    { title: "Test Ortamı ve Sandbox Kullanımı:", detail: "Yeni bir ödeme entegrasyonu geliştirirken, gerçek para akışı olmadan işlemleri denemek için sandbox (test ortamı) kullanılır. Ödeme sağlayıcıları genelde işyerine test API anahtarı, test kart numaraları gibi bilgiler sağlar. Bu modülde örnek bir ödeme kuruluşunun test paneline giriş yapılarak API anahtarı nasıl alınır gösterilecek, sandbox ortamında hangi kart numaraları ile hangi senaryoların test edilebileceği (örn. başarısız işlem senaryosu için belirli bir tutar kullanma) anlatılacaktır. Test ortamında 3D Secure simülasyonu, provizyon ve iade testleri gibi adımlar uygulamalı olarak gösterilecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Örnek API ile Ödeme İsteği:",
                description: "{\n  "api_key": "TEST-API-KEY",\n  "amount": 120.50,\n  "currency": "TRY",\n  "card_number": "5406675406675403",\n  "expire_month": "12",\n  "expire_year": "2025",\n  "cvv": "000",\n  "card_holder_name": "TEST USER",\n  "order_id": "123456"\n}\n      Bu örnek bir API isteğinde, gerekli alanlar (tutar, kart bilgileri, sipariş numarası vs.) JSON formatında gönderiliyor. Sunucu buna karşılık işlem sonucunu bir JSON ile dönecek (ör. {"status":"success","transaction_id":"ABC123"...}). Bu bölümde hem istemci tarafı kod perspektifinden (örneğin cURL veya Postman ile) hem de sunucu tarafında neler olduğundan bahsedilecektir.",
                topics: [
                    { title: "Örnek API ile Ödeme İsteği:", detail: "{\n  "api_key": "TEST-API-KEY",\n  "amount": 120.50,\n  "currency": "TRY",\n  "card_number": "5406675406675403",\n  "expire_month": "12",\n  "expire_year": "2025",\n  "cvv": "000",\n  "card_holder_name": "TEST USER",\n  "order_id": "123456"\n}\n      Bu örnek bir API isteğinde, gerekli alanlar (tutar, kart bilgileri, sipariş numarası vs.) JSON formatında gönderiliyor. Sunucu buna karşılık işlem sonucunu bir JSON ile dönecek (ör. {"status":"success","transaction_id":"ABC123"...}). Bu bölümde hem istemci tarafı kod perspektifinden (örneğin cURL veya Postman ile) hem de sunucu tarafında neler olduğundan bahsedilecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "3D Secure Entegrasyon Detayı:",
                description: "İlk etapta ödeme isteği bankaya gönderilirken 3D isteme flag’i iletilir; banka dönüşte bir doğrulama URL’i ve Transaction ID verir; müşteri doğrulamayı yapar; ardından işyeri sistemine dönüş olur ve sonuç API üzerinden teyit edilir. Bu akışın teknik detayları ve entegrasyondaki kritik noktalar (örneğin, 3D doğrulama başarısızsa işlemi iptal etmek) açıklanacaktır.",
                topics: [
                    { title: "3D Secure Entegrasyon Detayı:", detail: "İlk etapta ödeme isteği bankaya gönderilirken 3D isteme flag’i iletilir; banka dönüşte bir doğrulama URL’i ve Transaction ID verir; müşteri doğrulamayı yapar; ardından işyeri sistemine dönüş olur ve sonuç API üzerinden teyit edilir. Bu akışın teknik detayları ve entegrasyondaki kritik noktalar (örneğin, 3D doğrulama başarısızsa işlemi iptal etmek) açıklanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Entegrasyon için İpuçları:",
                description: "Zaman aşımı süreleri, tekrarlı istek gönderme (retry) stratejileri, idempotent (yeniden denenebilir) tasarım, hata kodlarının yorumlanması vs. Örneğin, ağ hatası oluştuğunda müşteri tarafına hemen başarısız demek yerine sonucun belirsiz olduğunu bildirip arka planda durumu kontrol etmek gerekebilir. Bu bölümde gerçek projelerde edinilmiş tecrübelerden yola çıkarak, sağlam bir entegrasyon için en iyi uygulamalar (best practices) paylaşılacaktır. Log tutmanın önemi, test case’leri hazırlarken uç senaryoların (ör. banka reddi, 3D şifresinin yanlış girilmesi, bakiyenin yetersiz olması) mutlaka ele alınması gerektiği gibi noktalar vurgulanacaktır.",
                topics: [
                    { title: "Entegrasyon için İpuçları:", detail: "Zaman aşımı süreleri, tekrarlı istek gönderme (retry) stratejileri, idempotent (yeniden denenebilir) tasarım, hata kodlarının yorumlanması vs. Örneğin, ağ hatası oluştuğunda müşteri tarafına hemen başarısız demek yerine sonucun belirsiz olduğunu bildirip arka planda durumu kontrol etmek gerekebilir. Bu bölümde gerçek projelerde edinilmiş tecrübelerden yola çıkarak, sağlam bir entegrasyon için en iyi uygulamalar (best practices) paylaşılacaktır. Log tutmanın önemi, test case’leri hazırlarken uç senaryoların (ör. banka reddi, 3D şifresinin yanlış girilmesi, bakiyenin yetersiz olması) mutlaka ele alınması gerektiği gibi noktalar vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 9: Operasyon, İzleme ve Destek",
        lessons: [
            {
                title: "İşlem İzleme ve Gerçek Zamanlı Kontrol:",
                description: "contentReference[oaicite:26]{index=26}. Bu bölümde, bir kontrol paneli üzerinden anlık işlem takibi nasıl yapılır, kritik metrikler (onay oranı, hata oranı, 3D başarısızlık oranı vb.) nasıl izlenir ele alınacak. Ayrıca, uyarı sistemleri (ör. belirli bir süre hiç işlem geçmemesi veya işlem adedinde ani düşüş artış olması durumunda alarm oluşturma) kurulmasının önemi vurgulanacaktır.",
                topics: [
                    { title: "İşlem İzleme ve Gerçek Zamanlı Kontrol:", detail: "contentReference[oaicite:26]{index=26}. Bu bölümde, bir kontrol paneli üzerinden anlık işlem takibi nasıl yapılır, kritik metrikler (onay oranı, hata oranı, 3D başarısızlık oranı vb.) nasıl izlenir ele alınacak. Ayrıca, uyarı sistemleri (ör. belirli bir süre hiç işlem geçmemesi veya işlem adedinde ani düşüş artış olması durumunda alarm oluşturma) kurulmasının önemi vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Hata Yönetimi ve Destek:",
                description: "Banka bağlantısında kesinti, işlem sırasında zaman aşımı, müşterinin çift ödeme yapması gibi durumlar oluşabilir. Operasyon ekibinin bu durumlarda hızlı aksiyon alması gerekir. Örneğin, banka tarafında bir servis kesintisi yaşandığında ilgili bankaya yönlenen işlemleri geçici olarak durdurmak veya alternatif rotalara yönlendirmek gerekebilir. Müşteriden iki kez tahsilat olmuşsa birini iade etmek ve özür bildirimi yapmak önemlidir. Bu bölümde sık karşılaşılan operasyonel sorunlar ve bunların çözüm prosedürleri tartışılacaktır. Aynı zamanda, 7/24 destek ihtiyacı, ekiplerin vardiya düzeni ve olası kriz senaryolarına hazırlık (disaster recovery planları) konularına değinilecektir.",
                topics: [
                    { title: "Hata Yönetimi ve Destek:", detail: "Banka bağlantısında kesinti, işlem sırasında zaman aşımı, müşterinin çift ödeme yapması gibi durumlar oluşabilir. Operasyon ekibinin bu durumlarda hızlı aksiyon alması gerekir. Örneğin, banka tarafında bir servis kesintisi yaşandığında ilgili bankaya yönlenen işlemleri geçici olarak durdurmak veya alternatif rotalara yönlendirmek gerekebilir. Müşteriden iki kez tahsilat olmuşsa birini iade etmek ve özür bildirimi yapmak önemlidir. Bu bölümde sık karşılaşılan operasyonel sorunlar ve bunların çözüm prosedürleri tartışılacaktır. Aynı zamanda, 7/24 destek ihtiyacı, ekiplerin vardiya düzeni ve olası kriz senaryolarına hazırlık (disaster recovery planları) konularına değinilecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Mutabakat ve Finansal Kontroller:",
                description: "Bir ödeme kuruluşunun farklı bankalardan aldığı günlük excel raporlarını sistemden çekilen raporla karşılaştırması, farkların bulunması ve raporlanması anlatılacaktır. Ayrıca, kesinti anlarında bazı işlemlerin “askıda” kalabileceği, bu nedenle düzenli kontrol mekanizmalarının önemi vurgulanacaktır.",
                topics: [
                    { title: "Mutabakat ve Finansal Kontroller:", detail: "Bir ödeme kuruluşunun farklı bankalardan aldığı günlük excel raporlarını sistemden çekilen raporla karşılaştırması, farkların bulunması ve raporlanması anlatılacaktır. Ayrıca, kesinti anlarında bazı işlemlerin “askıda” kalabileceği, bu nedenle düzenli kontrol mekanizmalarının önemi vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Chargeback ve İtiraz Yönetimi:",
                description: "Müşterilerin kredi kartı ekstrelerinde fark etmedikleri veya tanımadıkları işlemler için bankaya itiraz (chargeback) etme hakları vardır. Bir işyeri için chargeback oranı belli bir seviyenin üstüne çıkarsa hem finansal kayıp hem de operasyonel yük doğar. Operasyon ekibinin chargeback bildirimlerini alıp işyerine iletmesi, gerekli belgeleri (ör. teslimat kanıtı) toplaması ve bankaya sunması gerekir. Bu bölümde chargeback süreçlerinin takibi, önlenmesi için alınabilecek önlemler (ör. 3D Secure zorunlu tutma, açıklayıcı firma açıklaması kullanma) ve kayıpların en aza indirilmesi için stratejiler ele alınacaktır.",
                topics: [
                    { title: "Chargeback ve İtiraz Yönetimi:", detail: "Müşterilerin kredi kartı ekstrelerinde fark etmedikleri veya tanımadıkları işlemler için bankaya itiraz (chargeback) etme hakları vardır. Bir işyeri için chargeback oranı belli bir seviyenin üstüne çıkarsa hem finansal kayıp hem de operasyonel yük doğar. Operasyon ekibinin chargeback bildirimlerini alıp işyerine iletmesi, gerekli belgeleri (ör. teslimat kanıtı) toplaması ve bankaya sunması gerekir. Bu bölümde chargeback süreçlerinin takibi, önlenmesi için alınabilecek önlemler (ör. 3D Secure zorunlu tutma, açıklayıcı firma açıklaması kullanma) ve kayıpların en aza indirilmesi için stratejiler ele alınacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Müşteri (İşyeri) İletişimi ve Yönetimi:",
                description: "Bir ödeme hizmeti sunarken, hizmet verdiğiniz üye işyerleriyle güçlü iletişim kurmak önemlidir. Operasyon ekipleri, işyerlerinden gelen soruları yanıtlar (örneğin “Bu işlemin durumu nedir?”, “Ödemem hesabıma ne zaman geçer?” gibi), teknik bir problem yaşandığında onları bilgilendirir. Bu bölümde müşteri yönetiminin en iyi uygulamaları, örnek bir işyeri portalinin sunabileceği bilgiler (gerçek zamanlı durum izleme, bilet oluşturma imkanı, duyuru panosu) tartışılacaktır. Aynı zamanda, yeni özellik duyuruları veya bakım çalışmaları gibi konularda proaktif bilgilendirmenin önemi anlatılacak, güven ve memnuniyetin operasyonel kaliteyle nasıl bağlantılı olduğu vurgulanacaktır.",
                topics: [
                    { title: "Müşteri (İşyeri) İletişimi ve Yönetimi:", detail: "Bir ödeme hizmeti sunarken, hizmet verdiğiniz üye işyerleriyle güçlü iletişim kurmak önemlidir. Operasyon ekipleri, işyerlerinden gelen soruları yanıtlar (örneğin “Bu işlemin durumu nedir?”, “Ödemem hesabıma ne zaman geçer?” gibi), teknik bir problem yaşandığında onları bilgilendirir. Bu bölümde müşteri yönetiminin en iyi uygulamaları, örnek bir işyeri portalinin sunabileceği bilgiler (gerçek zamanlı durum izleme, bilet oluşturma imkanı, duyuru panosu) tartışılacaktır. Aynı zamanda, yeni özellik duyuruları veya bakım çalışmaları gibi konularda proaktif bilgilendirmenin önemi anlatılacak, güven ve memnuniyetin operasyonel kaliteyle nasıl bağlantılı olduğu vurgulanacaktır." },
                ],
                status: "Planlandı"
            },
        ]
    },
    {
        name: "Modül 10: Ürün Yönetimi ve Süreçler",
        lessons: [
            {
                title: "Ödeme Ürünü Geliştirme Döngüsü:",
                description: "Diyelim ki “link ile ödeme” özelliğini platformumuza eklemek istiyoruz. Öncelikle pazar araştırması ve rekabet analizi yapılır, iş ihtiyaçları belirlenir. Sonra yazılım ekibiyle teknik değerlendirme (tasarım) yapılır. Geliştirme sırasında ürün yöneticisi gereksinimlerin karşılandığını takip eder. Devreye almadan önce UAT (kabul testleri) yapılır, pilot müşteri ile denenir ve ardından genel kullanıma açılır. Bu sürecin iyi yönetilmesi için gereken adımlar gerçek bir proje örneği ile anlatılacaktır.",
                topics: [
                    { title: "Ödeme Ürünü Geliştirme Döngüsü:", detail: "Diyelim ki “link ile ödeme” özelliğini platformumuza eklemek istiyoruz. Öncelikle pazar araştırması ve rekabet analizi yapılır, iş ihtiyaçları belirlenir. Sonra yazılım ekibiyle teknik değerlendirme (tasarım) yapılır. Geliştirme sırasında ürün yöneticisi gereksinimlerin karşılandığını takip eder. Devreye almadan önce UAT (kabul testleri) yapılır, pilot müşteri ile denenir ve ardından genel kullanıma açılır. Bu sürecin iyi yönetilmesi için gereken adımlar gerçek bir proje örneği ile anlatılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "İş Analizi ve Gereksinimler:",
                description: "Ürün yönetiminde iş analistleri, iş birimlerinin ihtiyaçlarını teknik ekiplere anlaşılır gereksinimler olarak iletir. Ödeme sistemleri gibi kompleks alanlarda iş analizi kritik önemdedir; çünkü küçük bir değişiklik bile finansal akışı etkileyebilir. Bu bölümde bir iş analistinin ödeme projesinde rolü, UML diyagramlarıyla süreç çizimi, kullanıcı senaryoları yazma, edge-case’leri düşünme konularındaki en iyi pratikler paylaşılacaktır. Örneğin, “Taksit sayısını dinamik yönetme” gibi bir özellik talebinde, analistin bankaların API limitasyonlarını, işyerinin beklentilerini ve yasal kısıtları harmanlayıp nasıl bir dokümantasyon hazırlayacağı örneklenebilir.",
                topics: [
                    { title: "İş Analizi ve Gereksinimler:", detail: "Ürün yönetiminde iş analistleri, iş birimlerinin ihtiyaçlarını teknik ekiplere anlaşılır gereksinimler olarak iletir. Ödeme sistemleri gibi kompleks alanlarda iş analizi kritik önemdedir; çünkü küçük bir değişiklik bile finansal akışı etkileyebilir. Bu bölümde bir iş analistinin ödeme projesinde rolü, UML diyagramlarıyla süreç çizimi, kullanıcı senaryoları yazma, edge-case’leri düşünme konularındaki en iyi pratikler paylaşılacaktır. Örneğin, “Taksit sayısını dinamik yönetme” gibi bir özellik talebinde, analistin bankaların API limitasyonlarını, işyerinin beklentilerini ve yasal kısıtları harmanlayıp nasıl bir dokümantasyon hazırlayacağı örneklenebilir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Roadmap Oluşturma:",
                description: "Bir fintech ürün yöneticisi, ürününün yol haritasını oluştururken hem müşteri geri bildirimlerini hem rekabet durumunu hem de yasal zorunlulukları dikkate alır. Roadmap (yol haritası), hangi özelliklerin ne zaman ele alınacağını önceliklendiren yüksek seviye bir plandır. Ödeme dünyasında örneğin regülatif bir tarih (PSD2 gereksinimleri, TR’de zorunlu TR Karekod geçişi gibi) yol haritasını etkileyebilir. Bu bölümde, stratejik planlama nasıl yapılır, OKR/KPI gibi metrikler roadmap’e nasıl yansıtılır ele alınacak. Kendi kariyer deneyimlerimden örneklerle, “önce hangi özelliğe yatırım yapmalıyız” sorusuna nasıl yanıt bulunduğunu aktaracağım.",
                topics: [
                    { title: "Roadmap Oluşturma:", detail: "Bir fintech ürün yöneticisi, ürününün yol haritasını oluştururken hem müşteri geri bildirimlerini hem rekabet durumunu hem de yasal zorunlulukları dikkate alır. Roadmap (yol haritası), hangi özelliklerin ne zaman ele alınacağını önceliklendiren yüksek seviye bir plandır. Ödeme dünyasında örneğin regülatif bir tarih (PSD2 gereksinimleri, TR’de zorunlu TR Karekod geçişi gibi) yol haritasını etkileyebilir. Bu bölümde, stratejik planlama nasıl yapılır, OKR/KPI gibi metrikler roadmap’e nasıl yansıtılır ele alınacak. Kendi kariyer deneyimlerimden örneklerle, “önce hangi özelliğe yatırım yapmalıyız” sorusuna nasıl yanıt bulunduğunu aktaracağım." },
                ],
                status: "Planlandı"
            },
            {
                title: "Test ve Kalite Güvencesi:",
                description: "Ödeme sistemlerinde hata payı yok denecek kadar az olmalıdır; zira bir hata finansal kayıp veya müşteri güveni kaybı demektir. Bu nedenle yazılım test süreci çok titiz olmalıdır. Bu bölümde fonksiyonel testler, entegrasyon testleri, performans testleri ve güvenlik testlerinin öneminden bahsedeceğiz. Özellikle 3D Secure akışı, taksit hesaplama gibi kritik parçaların çeşitli senaryolarla test edilmesi gerekir. Otomasyon testlerinin (unit test, API regression test) yanı sıra insanların yaptığı kabul testlerinin (özellikle finansal doğruluk için) gerekliliği vurgulanacaktır. Örneğin, platforma yeni bir kart ailesi eklendiğinde bunun tüm akışlarda (provizyon, iptal, iade, mutabakat) düzgün çalıştığını teyit etmek için test planı hazırlanmalıdır. Bu modülde bir test senaryosu örneği ve bug yönetim süreci de kısaca gösterilecektir.",
                topics: [
                    { title: "Test ve Kalite Güvencesi:", detail: "Ödeme sistemlerinde hata payı yok denecek kadar az olmalıdır; zira bir hata finansal kayıp veya müşteri güveni kaybı demektir. Bu nedenle yazılım test süreci çok titiz olmalıdır. Bu bölümde fonksiyonel testler, entegrasyon testleri, performans testleri ve güvenlik testlerinin öneminden bahsedeceğiz. Özellikle 3D Secure akışı, taksit hesaplama gibi kritik parçaların çeşitli senaryolarla test edilmesi gerekir. Otomasyon testlerinin (unit test, API regression test) yanı sıra insanların yaptığı kabul testlerinin (özellikle finansal doğruluk için) gerekliliği vurgulanacaktır. Örneğin, platforma yeni bir kart ailesi eklendiğinde bunun tüm akışlarda (provizyon, iptal, iade, mutabakat) düzgün çalıştığını teyit etmek için test planı hazırlanmalıdır. Bu modülde bir test senaryosu örneği ve bug yönetim süreci de kısaca gösterilecektir." },
                ],
                status: "Planlandı"
            },
            {
                title: "Devreye Alım (Go-Live) ve Sonrası:",
                description: "Yeni bir özelliği canlıya almak, detaylı bir planlama gerektirir. Bakım zamanı planlamak, geri alma (rollback) planı hazırlamak, müşteri iletişimlerini önceden yapmak gibi. Ürün yönetimi, geliştirme ve operasyon ekipleri birlikte çalışarak minimum kesinti ile yayını hedefler. Bu bölümde canlıya geçiş öncesi checklist’ler (örn. “SSL sertifikası güncellendi mi?”, “gerekli bildirimler yapıldı mı?”), canlıya almada izlenecek adımlar ve sonrası izleme ele alınacak. Ayrıca canlıya alım sonrası kullanıcı geri bildirimlerinin toplanması, olası ufak düzeltmelerin hızlıca yapılması konularından bahsedilecektir. Gerçek hayattan bir örnek ile (örn. bir bankanın sanal POS entegrasyonunu canlıya aldığımız gece yaşananlar) bu süreç somutlandırılacaktır.",
                topics: [
                    { title: "Devreye Alım (Go-Live) ve Sonrası:", detail: "Yeni bir özelliği canlıya almak, detaylı bir planlama gerektirir. Bakım zamanı planlamak, geri alma (rollback) planı hazırlamak, müşteri iletişimlerini önceden yapmak gibi. Ürün yönetimi, geliştirme ve operasyon ekipleri birlikte çalışarak minimum kesinti ile yayını hedefler. Bu bölümde canlıya geçiş öncesi checklist’ler (örn. “SSL sertifikası güncellendi mi?”, “gerekli bildirimler yapıldı mı?”), canlıya almada izlenecek adımlar ve sonrası izleme ele alınacak. Ayrıca canlıya alım sonrası kullanıcı geri bildirimlerinin toplanması, olası ufak düzeltmelerin hızlıca yapılması konularından bahsedilecektir. Gerçek hayattan bir örnek ile (örn. bir bankanın sanal POS entegrasyonunu canlıya aldığımız gece yaşananlar) bu süreç somutlandırılacaktır." },
                ],
                status: "Planlandı"
            },
            {
                title: "Eğitim Serisi Kapanış ve Özet:",
                description: "Ödeme ekosisteminin nasıl çalıştığı, sanal POS ve ödeme geçidi kavramları, teknik entegrasyon detayları, operasyonel mükemmelliğin önemi ve ürün geliştirme döngüsündeki kritik adımlar. Ayrıca, sektörde sürekli öğrenmenin ve güncel kalmanın altını çizeceğiz; zira FinTech dünyası hızla evrilmeye devam ediyor. Katılımcılara, kariyerlerinde ve projelerinde başarılar dileyerek ve gerekli olabilecek kaynak önerileriyle (kitaplar, bloglar, standart dokümanları gibi) eğitimi noktalayacağız.",
                topics: [
                    { title: "Eğitim Serisi Kapanış ve Özet:", detail: "Ödeme ekosisteminin nasıl çalıştığı, sanal POS ve ödeme geçidi kavramları, teknik entegrasyon detayları, operasyonel mükemmelliğin önemi ve ürün geliştirme döngüsündeki kritik adımlar. Ayrıca, sektörde sürekli öğrenmenin ve güncel kalmanın altını çizeceğiz; zira FinTech dünyası hızla evrilmeye devam ediyor. Katılımcılara, kariyerlerinde ve projelerinde başarılar dileyerek ve gerekli olabilecek kaynak önerileriyle (kitaplar, bloglar, standart dokümanları gibi) eğitimi noktalayacağız." },
                ],
                status: "Planlandı"
            },
        ]
    },
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
