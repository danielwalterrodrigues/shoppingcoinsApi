const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const homepageContent = [
  {
    "Id": "P1004",
    "name": "Dell XPS 13",
    "quickCescription": "Notebook premium com tela infinita e alto desempenho.",
    "price": 6999.90,
    "imageUri": "https://source.unsplash.com/800x600/?laptop",
    "category": "Notebooks",
    "creationDate": "2025-01-18"
  },
  {
    "Id": "P1005",
    "name": "Apple Watch Series 9",
    "quickCescription": "Relógio inteligente com sensores avançados de saúde.",
    "price": 3499.00,
    "imageUri": "https://source.unsplash.com/800x600/?smartwatch",
    "category": "Wearables",
    "creationDate": "2025-01-19"
  }
]

const products = [
  {
    "Id": "P1001",
    "name": "iPhone 15 Pro Max",
    "quickCescription": "Smartphone premium com câmera avançada e design em titânio.",
    "price": 8999.90,
    "imageUri": "https://source.unsplash.com/800x600/?iphone",
    "category": "Celulares",
    "creationDate": "2025-01-15"
  },
  {
    "Id": "P1002",
    "name": "Samsung Galaxy S24 Ultra",
    "quickCescription": "Poderoso smartphone Android com câmera de 200MP.",
    "price": 8299.00,
    "imageUri": "https://source.unsplash.com/800x600/?android,smartphone",
    "category": "Celulares",
    "creationDate": "2025-01-16"
  },
  {
    "Id": "P1003",
    "name": "MacBook Air M2",
    "quickCescription": "Notebook ultrafino com chip M2 e bateria de longa duração.",
    "price": 7999.00,
    "imageUri": "https://source.unsplash.com/800x600/?macbook",
    "category": "Notebooks",
    "creationDate": "2025-01-17"
  },
  {
    "Id": "P1004",
    "name": "Dell XPS 13",
    "quickCescription": "Notebook premium com tela infinita e alto desempenho.",
    "price": 6999.90,
    "imageUri": "https://source.unsplash.com/800x600/?laptop",
    "category": "Notebooks",
    "creationDate": "2025-01-18"
  },
  {
    "Id": "P1005",
    "name": "Apple Watch Series 9",
    "quickCescription": "Relógio inteligente com sensores avançados de saúde.",
    "price": 3499.00,
    "imageUri": "https://source.unsplash.com/800x600/?smartwatch",
    "category": "Wearables",
    "creationDate": "2025-01-19"
  },
  {
    "Id": "P1006",
    "name": "Sony WH-1000XM5",
    "quickCescription": "Headphone com cancelamento de ruído líder da categoria.",
    "price": 2499.90,
    "imageUri": "https://source.unsplash.com/800x600/?headphones",
    "category": "Áudio",
    "creationDate": "2025-01-20"
  },
  {
    "Id": "P1007",
    "name": "Logitech MX Master 3S",
    "quickCescription": "Mouse profissional ergonômico de alta precisão.",
    "price": 499.90,
    "imageUri": "https://source.unsplash.com/800x600/?mouse,tech",
    "category": "Acessórios",
    "creationDate": "2025-01-21"
  },
  {
    "Id": "P1008",
    "name": "iPad Pro 12.9 M2",
    "quickCescription": "Tablet poderoso com tela Liquid Retina XDR.",
    "price": 10499.00,
    "imageUri": "https://source.unsplash.com/800x600/?tablet",
    "category": "Tablets",
    "creationDate": "2025-01-22"
  },
  {
    "Id": "P1009",
    "name": "Nintendo Switch OLED",
    "quickCescription": "Console híbrido com tela OLED vibrante.",
    "price": 2499.00,
    "imageUri": "https://source.unsplash.com/800x600/?nintendo,console",
    "category": "Games",
    "creationDate": "2025-01-23"
  },
  {
    "Id": "P1010",
    "name": "GoPro Hero 12 Black",
    "quickCescription": "Câmera de ação com estabilização avançada.",
    "price": 2999.00,
    "imageUri": "https://source.unsplash.com/800x600/?gopro,actioncamera",
    "category": "Câmeras",
    "creationDate": "2025-01-24"
  }
];



app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/homeproducts', (req, res) => {
  res.json(homepageContent);
});



app.get('/', (req, res) => {
  res.send('API de Produtos funcionando!');
});



app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === "teste@teste.com" && password === "123456") {
    return res.status(200).json({
      message: "Login realizado com sucesso",
      user: {
        logged: true,
        useId: "U1001",
        username: username,
        name: "Usuário Teste",
        token: "fake-jwt-token-123",
        balance: 1500.00,
        signupDate: new Date()
      }
    });
  }

  return res.status(401).json({
    message: "Credenciais inválidas"
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});