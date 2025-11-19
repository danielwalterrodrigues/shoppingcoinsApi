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
    "imageUri": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/spi/platinum/touch-oled/notebook-xps-13-9345-oled-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400",
    "category": "Notebooks",
    "creationDate": "2025-01-18"
  },
  {
    "Id": "P1005",
    "name": "Apple Watch Series 9",
    "quickCescription": "Relógio inteligente com sensores avançados de saúde.",
    "price": 3499.00,
    "imageUri": "https://www.oficinadanet.com.br/imagens/obj_item/1619/apple-watch-series-9-aluminum.jpg",
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
    "imageUri": "https://horizonplay.fbitsstatic.net/img/p/apple-iphone-15-pro-max-256gb-5g-vitrine-tela-super-retina-xdr-display-6-7-titanio-branco-152589/339192-5.jpg?w=670&h=670&v=202501261959",
    "category": "Celulares",
    "creationDate": "2025-01-15"
  },
  {
    "Id": "P1002",
    "name": "Samsung Galaxy S24 Ultra",
    "quickCescription": "Poderoso smartphone Android com câmera de 200MP.",
    "price": 8299.00,
    "imageUri": "https://s2-techtudo.glbimg.com/fls5w1nhFP3PNDuTfnmmgpMh0Ik=/600x0/filters:quality(50)/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/k/N/rNEoCPRhamgAGHZzRgrA/img-1971.jpg",
    "category": "Celulares",
    "creationDate": "2025-01-16"
  },
  {
    "Id": "P1003",
    "name": "MacBook Air M2",
    "quickCescription": "Notebook ultrafino com chip M2 e bateria de longa duração.",
    "price": 7999.00,
    "imageUri": "https://cdn.awsli.com.br/2500x2500/2652/2652463/produto/292187102/1-gqwiu52jvl.jpg",
    "category": "Notebooks",
    "creationDate": "2025-01-17"
  },
  {
    "Id": "P1004",
    "name": "Dell XPS 13",
    "quickCescription": "Notebook premium com tela infinita e alto desempenho.",
    "price": 6999.90,
    "imageUri": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/spi/platinum/touch-oled/notebook-xps-13-9345-oled-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400",
    "category": "Notebooks",
    "creationDate": "2025-01-18"
  },
  {
    "Id": "P1005",
    "name": "Apple Watch Series 9",
    "quickCescription": "Relógio inteligente com sensores avançados de saúde.",
    "price": 3499.00,
    "imageUri": "https://www.oficinadanet.com.br/imagens/obj_item/1619/apple-watch-series-9-aluminum.jpg",
    "category": "Wearables",
    "creationDate": "2025-01-19"
  },
  {
    "Id": "P1006",
    "name": "Sony WH-1000XM5",
    "quickCescription": "Headphone com cancelamento de ruído líder da categoria.",
    "price": 2499.90,
    "imageUri": "https://wafuu.com/cdn/shop/products/sony-wh-1000xm5-sm-platinum-silver-wireless-headphones-501658_540x.jpg?v=1695256796",
    "category": "Áudio",
    "creationDate": "2025-01-20"
  },
  {
    "Id": "P1007",
    "name": "Logitech MX Master 3S",
    "quickCescription": "Mouse profissional ergonômico de alta precisão.",
    "price": 499.90,
    "imageUri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_ph0AMbPXFNdJoZuV1QxykIFUNHplGmuwQ&s",
    "category": "Acessórios",
    "creationDate": "2025-01-21"
  },
  {
    "Id": "P1008",
    "name": "iPad Pro 12.9 M2",
    "quickCescription": "Tablet poderoso com tela Liquid Retina XDR.",
    "price": 10499.00,
    "imageUri": "https://www.iplace.com.br/ccstore/v1/images/?source=/file/v3745778282422882320/products/222440.01.638634826051131589-apple-ipad-pro-12-6geracao-wifi-128gb-prateado-mnxq3bz-a.jpg&height=350&width=350&quality=1.0",
    "category": "Tablets",
    "creationDate": "2025-01-22"
  },
  {
    "Id": "P1009",
    "name": "Nintendo Switch OLED",
    "quickCescription": "Console híbrido com tela OLED vibrante.",
    "price": 2499.00,
    "imageUri": "https://cdn.awsli.com.br/2500x2500/1919/1919257/produto/149069982/8b1024a5ed.jpg",
    "category": "Games",
    "creationDate": "2025-01-23"
  },
  {
    "Id": "P1010",
    "name": "GoPro Hero 12 Black",
    "quickCescription": "Câmera de ação com estabilização avançada.",
    "price": 2999.00,
    "imageUri": "https://http2.mlstatic.com/D_NQ_NP_632459-MLB91873061712_092025-O.webp",
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