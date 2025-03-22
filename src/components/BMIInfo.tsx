import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Title,
  Subtitle,
  ResultText,
  InfoBox,
  Button,
  CategoryBox,
  CategoryLabel,
  CategoryValue
} from '../styles/StyledComponents';

const BMIInfo: React.FC = () => {
  const navigate = useNavigate();
  
  const bmiCategories = [
    { range: '< 18.5', category: 'Zayıf' },
    { range: '18.5 - 24.9', category: 'Normal' },
    { range: '25 - 29.9', category: 'Fazla Kilolu' },
    { range: '30 - 34.9', category: 'Obez (Sınıf I)' },
    { range: '35 - 39.9', category: 'Obez (Sınıf II)' },
    { range: '≥ 40', category: 'Aşırı Obez (Sınıf III)' }
  ];
  
  return (
    <Card>
      <Title>BMI (Vücut Kitle Endeksi) Nedir?</Title>
      
      <InfoBox>
        <ResultText>
          Vücut Kitle Endeksi (BMI), kişinin vücut ağırlığının (kg), boy uzunluğunun (m) karesine bölünmesiyle hesaplanan bir değerdir. 
          BMI, kişinin vücut yağ oranı hakkında kabaca bir fikir verir ve kilo ile ilgili sağlık risklerini değerlendirmede kullanılır.
        </ResultText>
        
        <ResultText>
          <strong>BMI Formülü:</strong> BMI = Kilo (kg) ÷ [Boy (m)]²
        </ResultText>
        
        <ResultText>
          Örneğin, 70 kg ağırlığında ve 1.75 m boyunda bir kişinin BMI değeri:
          70 ÷ (1.75 × 1.75) = 70 ÷ 3.06 = 22.9 olarak hesaplanır.
        </ResultText>
      </InfoBox>
      
      <Subtitle>BMI Kategorileri</Subtitle>
      
      {bmiCategories.map((item, index) => (
        <CategoryBox key={index}>
          <CategoryLabel>BMI {item.range}:</CategoryLabel>
          <CategoryValue>{item.category}</CategoryValue>
        </CategoryBox>
      ))}
      
      <InfoBox>
        <Subtitle>BMI'nin Sınırlamaları</Subtitle>
        <ResultText>
          BMI, vücut kompozisyonunun detaylı bir ölçümü değildir ve bazı sınırlamaları vardır:
        </ResultText>
        <ul>
          <li>Kas kütlesi ile yağ kütlesi arasında ayrım yapmaz (örneğin, atletler yüksek kas kütlesi nedeniyle fazla kilolu kategorisinde görünebilir).</li>
          <li>Yaş, cinsiyet, etnik köken gibi faktörleri dikkate almaz.</li>
          <li>Hamilelik, büyüme çağındaki çocuklar veya yaşlılar için her zaman doğru sonuçlar vermeyebilir.</li>
        </ul>
        <ResultText>
          Bu nedenle, BMI sonucunuzu bir sağlık uzmanı ile değerlendirmeniz önerilir.
        </ResultText>
      </InfoBox>
      
      <Button onClick={() => navigate('/')}>
        BMI Hesaplamaya Dön
      </Button>
    </Card>
  );
};

export default BMIInfo; 