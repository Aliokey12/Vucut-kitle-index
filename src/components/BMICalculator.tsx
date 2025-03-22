import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Result,
  ResultTitle,
  ResultText,
  Card,
  Title,
  DietList,
  DietItem
} from '../styles/StyledComponents';

interface BMIData {
  height: number;
  weight: number;
  bmi: number;
  category: string;
  date: string;
}

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [dietPlan, setDietPlan] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load last BMI data from localStorage if available
    const savedBmiData = localStorage.getItem('bmiData');
    if (savedBmiData) {
      const parsedData: BMIData = JSON.parse(savedBmiData);
      setHeight(parsedData.height.toString());
      setWeight(parsedData.weight.toString());
    }
  }, []);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      const roundedBmi = parseFloat(calculatedBmi.toFixed(2));
      
      setBmi(roundedBmi);
      
      // Determine BMI category
      let bmiCategory = '';
      if (roundedBmi < 18.5) {
        bmiCategory = 'Zayıf';
      } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
        bmiCategory = 'Normal';
      } else if (roundedBmi >= 25 && roundedBmi < 30) {
        bmiCategory = 'Fazla Kilolu';
      } else if (roundedBmi >= 30 && roundedBmi < 35) {
        bmiCategory = 'Obez (Sınıf I)';
      } else if (roundedBmi >= 35 && roundedBmi < 40) {
        bmiCategory = 'Obez (Sınıf II)';
      } else {
        bmiCategory = 'Aşırı Obez (Sınıf III)';
      }
      
      setCategory(bmiCategory);
      
      // Generate diet plan based on category
      generateDietPlan(bmiCategory);
      
      // Save to localStorage
      const bmiData: BMIData = {
        height: parseFloat(height),
        weight: parseFloat(weight),
        bmi: roundedBmi,
        category: bmiCategory,
        date: new Date().toISOString()
      };
      
      localStorage.setItem('bmiData', JSON.stringify(bmiData));
      setShowResult(true);
    }
  };

  const generateDietPlan = (category: string) => {
    let diet: string[] = [];
    
    switch (category) {
      case 'Zayıf':
        diet = [
          'Günde 5-6 öğün beslenmeye çalışın.',
          'Protein açısından zengin besinler tüketin (yumurta, et, süt ürünleri).',
          'Sağlıklı yağlar tüketin (zeytinyağı, avokado, yağlı balıklar).',
          'Kompleks karbonhidratlar ekleyin (tam tahıllar, patates).',
          "Protein shake'leri veya yüksek kalorili smoothie'ler hazırlayın.",
          'Kuru yemişler ve tohumlar gibi besin değeri yüksek atıştırmalıklar tüketin.'
        ];
        break;
      case 'Normal':
        diet = [
          'Günde 3 ana öğün, 2 ara öğün beslenmeye devam edin.',
          'Çeşitli meyve ve sebzeler tüketin.',
          'Tam tahıllı ürünleri tercih edin.',
          'Yağsız protein kaynaklarını tüketin.',
          'Yeterli miktarda su için.',
          'Sağlıklı beslenmenizdeki dengeyi koruyun.'
        ];
        break;
      case 'Fazla Kilolu':
        diet = [
          'Porsiyon kontrolüne dikkat edin.',
          'Şeker ve işlenmiş gıda tüketimini azaltın.',
          'Bol sebze ve meyve tüketin.',
          'Yağsız protein kaynaklarını tercih edin.',
          'Tam tahıllı ürünlere ağırlık verin.',
          'Günde en az 30 dakika fiziksel aktivite yapın.',
          'Su tüketimini artırın.'
        ];
        break;
      default: // Obez kategorileri
        diet = [
          'Bir beslenme uzmanı ile görüşün.',
          'Kalori alımınızı kontrol edin ve izleyin.',
          'İşlenmiş gıdalardan kaçının.',
          'Şekerli içecek ve atıştırmalıkları sınırlandırın.',
          'Protein bakımından zengin besinlere öncelik verin.',
          'Günlük fiziksel aktiviteyi yavaş yavaş artırın.',
          'Bol su tüketin ve hazır meyve sularından kaçının.',
          'Düzenli öğünler yiyin ve öğün atlamayın.'
        ];
        break;
    }
    
    setDietPlan(diet);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <Card>
      <Title>Vücut Kitle Endeksi Hesaplama</Title>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="height">Boy (cm)</Label>
          <Input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Örn: 175"
            required
            min="50"
            max="250"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="weight">Kilo (kg)</Label>
          <Input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Örn: 70"
            required
            min="20"
            max="300"
          />
        </FormGroup>
        
        <Button type="submit">Hesapla</Button>
      </Form>
      
      {showResult && bmi !== null && (
        <div className="result-container">
          <ResultTitle>BMI Sonucunuz</ResultTitle>
          <ResultText>Vücut Kitle Endeksi: <strong>{bmi}</strong></ResultText>
          <ResultText>Kategori: <strong>{category}</strong></ResultText>
          
          <ResultTitle>Önerilen Diyet Planı</ResultTitle>
          <DietList>
            {dietPlan.map((item, index) => (
              <DietItem key={index}>{item}</DietItem>
            ))}
          </DietList>
          
          <Button onClick={() => navigate('/bmi-nedir')}>
            BMI Nedir?
          </Button>
        </div>
      )}
    </Card>
  );
};

export default BMICalculator; 