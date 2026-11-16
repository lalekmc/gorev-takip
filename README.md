# Görev Takip

React, TypeScript ve Tailwind CSS ile geliştirilmiş görev yönetimi uygulaması. Veriler tarayıcının LocalStorage alanında saklanır.

![Ana sayfa](screenshots/ana-sayfa.png)
![Güncelleme ekranı](screenshots/guncelleme.png)

## Özellikler

- **Ekle:** Başlık, açıklama ve öncelik ile yeni görev ekleme
- **Listele:** Görevleri listeleme, durumuna göre filtreleme ve arama
- **Güncelle:** Görevi düzenleme, tamamlandı olarak işaretleme
- **Sil:** Onay alarak görev silme
- Sayfa yenilense de görevler kaybolmaz (LocalStorage)

## Kullanılan Teknolojiler

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Netlify (yayın)

## Klasör Yapısı

```
src/
├── components/   Header, TaskForm, FilterBar, TaskList, TaskItem
├── pages/        HomePage
├── interfaces/   Task tipleri
└── services/     LocalStorage işlemleri
```

## Kurulum

```bash
npm install
npm run dev
```

Üretim derlemesi için: `npm run build`
