# Vücut Kitle Endeksi Hesaplama Uygulaması

Canlı Önizleme: [BMI Hesaplama Uygulaması](https://bmi-hesaplama.vercel.app)

## Proje Hakkında

Bu uygulama, kullanıcıların boy ve kilolarını girerek vücut kitle endeksini (BMI) hesaplamasına olanak tanır. Uygulama, hesaplanan BMI değerine göre kullanıcıya uygun bir diyet listesi sunar.

## Özellikler

- Boy ve kilo girişi yaparak BMI hesaplama
- BMI kategorisini görüntüleme (Zayıf, Normal, Fazla Kilolu, Obez)
- BMI kategorisine göre özel diyet tavsiyeleri
- Hesaplamaların tarayıcıda saklanması (localStorage)
- Responsive tasarım
- BMI hakkında bilgilendirici içerik
- React Router ile sayfa yönlendirme
- Styled Components ile modern arayüz tasarımı
- useEffect ve useState React Hooks kullanımı

## Teknolojiler

- React
- TypeScript
- React Router (URL senkronizasyonu için)
- Styled Components (UI bileşenleri için)
- Vite (Hızlı geliştirme ortamı)
- localStorage (Tarayıcıda veri saklama)

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/username/bmi-hesaplama.git
cd bmi-hesaplama
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıda görüntüleyin:
```
http://localhost:5173
```

## Dağıtım (Deployment)

Bu uygulamayı Vercel'e dağıtmak için:

1. GitHub'a projenizi push edin
2. Vercel hesabınızı GitHub hesabınıza bağlayın
3. "New Project" seçeneğini tıklayın
4. GitHub reponuzu seçin
5. Varsayılan ayarları koruyun ve "Deploy" butonuna tıklayın

## Bileşenler

1. **BMICalculator**: Ana hesaplama bileşeni - Boy ve kilo girişi yapılarak BMI hesaplama ve diyet önerilerini gösterir
2. **BMIInfo**: BMI hakkında detaylı bilgi veren bileşen - BMI'nin ne olduğu, nasıl hesaplandığı ve kategorileri hakkında bilgi içerir
3. **Navigation**: Sayfa navigasyonu için bileşen - Sayfalar arası geçiş yapılmasını sağlar

## Lisans

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
