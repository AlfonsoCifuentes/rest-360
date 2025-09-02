# 🍽️ Rest-360 Restaurant Management System

<div align="center">
  <img src="https://img.shields.io/badge/React-18+-blue.svg" alt="React Version"/>
  <img src="https://img.shields.io/badge/Chakra%20UI-Modern%20UI-teal.svg" alt="Chakra UI"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow.svg" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/SCSS-Styling-pink.svg" alt="SCSS"/>
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/>
</div>

<p align="center">
  <strong>🎯 Complete frontend solution for restaurant management with modern UI components and seamless user experience</strong>
</p>

---

## 📊 **Project Overview**

**Rest-360** is a comprehensive restaurant management web application frontend built with **React** and **Chakra UI**. The project provides a complete solution for restaurant operations including menu management, order processing, customer interactions, and administrative functions with a modern, responsive interface.

### 🎯 **Key Features**

- **🍕 Menu Management**: Dynamic menu display with categories and pricing
- **🛒 Order Processing**: Real-time order management and tracking
- **👥 Customer Interface**: Intuitive user experience for customers
- **📱 Responsive Design**: Mobile-first approach with modern UI components
- **🎨 Modern UI**: Chakra UI components for consistent design
- **🚀 Fast Performance**: Optimized React application with efficient rendering
- **📊 Admin Dashboard**: Restaurant management and analytics

---

## 🛠️ **Technical Stack**

### **Frontend Framework**
- **⚛️ React 17.0.2**: Modern JavaScript library for building user interfaces
- **🌐 React Router DOM 6.2.1**: Declarative routing for React applications
- **🎨 Chakra UI 1.8.6**: Simple, modular and accessible component library

### **Styling & Design**
- **💄 SCSS**: Advanced CSS preprocessor for better styling architecture
- **🎨 Chakra UI Components**: Pre-built accessible components
- **📱 Responsive Design**: Mobile-first responsive web design

### **Development Tools**
- **🔧 React Scripts 5.0.0**: Build tools and development server
- **🧪 Jest & Testing Library**: Comprehensive testing framework
- **📦 npm/yarn**: Package management

### **Key Dependencies**
```json
{
  "@chakra-ui/react": "^1.8.6",
  "@chakra-ui/layout": "^1.7.7",
  "@chakra-ui/accordion": "^1.4.9",
  "react": "^17.0.2",
  "react-router-dom": "^6.2.1",
  "axios": "^0.26.1",
  "sass": "^1.49.9",
  "nuka-carousel": "^4.8.4",
  "react-svg": "^14.1.12",
  "uuid": "^8.3.2"
}
```

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 14+ and npm/yarn
- Modern web browser
- Git for version control

### **Installation**
```bash
# Clone the repository
git clone https://github.com/AlfonsoCifuentes/rest-360.git
cd rest-360

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### **Available Scripts**
```bash
npm start          # Development server (localhost:3000)
npm test           # Run test suite
npm run build      # Production build
npm run eject      # Eject from Create React App
```

---

## 🏗️ **Project Architecture**

### **Component Structure**
```
src/
├── components/
│   ├── Menu/
│   │   ├── MenuCard.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── MenuList.jsx
│   ├── Orders/
│   │   ├── OrderSummary.jsx
│   │   ├── OrderItem.jsx
│   │   └── OrderHistory.jsx
│   ├── UI/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── LoadingSpinner.jsx
│   └── Admin/
│       ├── Dashboard.jsx
│       ├── Analytics.jsx
│       └── Management.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Orders.jsx
│   ├── Contact.jsx
│   └── Admin.jsx
├── hooks/
│   ├── useMenu.js
│   ├── useOrders.js
│   └── useAuth.js
├── services/
│   ├── api.js
│   ├── menuService.js
│   └── orderService.js
├── styles/
│   ├── globals.scss
│   ├── components/
│   └── pages/
└── utils/
    ├── helpers.js
    ├── constants.js
    └── validators.js
```

### **Key Features Implementation**

#### **🍕 Menu Management System**
```javascript
// Menu component with Chakra UI
import { Box, Grid, Badge, Image, Text } from '@chakra-ui/react';

const MenuCard = ({ item }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={item.image} alt={item.name} />
    <Box p="6">
      <Badge colorScheme="green">{item.category}</Badge>
      <Text mt="1" fontWeight="semibold">{item.name}</Text>
      <Text>{item.description}</Text>
      <Text fontSize="xl" color="green.600">${item.price}</Text>
    </Box>
  </Box>
);
```

#### **🛒 Order Processing**
```javascript
// Order management with state management
const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const addOrder = async (orderData) => {
    setLoading(true);
    try {
      const response = await orderService.createOrder(orderData);
      setOrders(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Order creation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return { orders, addOrder, loading };
};
```

#### **📱 Responsive Navigation**
```javascript
// React Router implementation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
```

---

## 🎨 **UI/UX Design Features**

### **🎨 Chakra UI Integration**
- **Consistent Design System**: Unified color palette and typography
- **Accessible Components**: Built-in accessibility features
- **Responsive Layouts**: Grid and Flex layouts for all screen sizes
- **Theme Customization**: Custom theme configuration
- **Animation Support**: Smooth transitions and micro-interactions

### **📱 Responsive Design**
- **Mobile-First Approach**: Optimized for mobile devices
- **Breakpoint System**: Consistent responsive behavior
- **Touch-Friendly Interface**: Optimized for touch interactions
- **Cross-Browser Compatibility**: Tested across major browsers

### **🎯 User Experience**
- **Intuitive Navigation**: Clear menu structure and routing
- **Fast Loading**: Optimized images and lazy loading
- **Interactive Elements**: Hover effects and click feedback
- **Error Handling**: User-friendly error messages
- **Loading States**: Clear feedback during async operations

---

## 🔧 **Advanced Features**

### **📊 State Management**
```javascript
// Context API for global state
const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (item) => {
    setCart(prev => [...prev, { ...item, id: uuid() }]);
  };

  const value = {
    menu, setMenu,
    cart, addToCart,
    user, setUser
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
```

### **🔄 API Integration**
```javascript
// API service with Axios
import axios from 'axios';

class MenuService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async getMenu() {
    try {
      const response = await this.api.get('/menu');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch menu');
    }
  }

  async createMenuItem(itemData) {
    try {
      const response = await this.api.post('/menu', itemData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create menu item');
    }
  }
}

export default new MenuService();
```

### **🎠 Interactive Components**
```javascript
// Carousel implementation with Nuka Carousel
import Carousel from 'nuka-carousel';

const FeaturedItems = ({ items }) => (
  <Carousel
    autoplay
    wrapAround
    speed={500}
    slidesToShow={3}
    cellAlign="center"
    defaultControlsConfig={{
      nextButtonText: '→',
      prevButtonText: '←'
    }}
  >
    {items.map(item => (
      <MenuCard key={item.id} item={item} />
    ))}
  </Carousel>
);
```

---

## 📊 **Performance Optimization**

### **⚡ React Optimization**
- **Component Memoization**: React.memo for expensive components
- **Lazy Loading**: Dynamic imports for route-based code splitting
- **Virtual Scrolling**: Efficient rendering for large lists
- **Image Optimization**: Lazy loading and WebP format support

### **🔧 Build Optimization**
- **Tree Shaking**: Remove unused code from bundles
- **Code Splitting**: Separate bundles for different routes
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Compression**: Gzip compression for production builds

### **📈 Performance Metrics**
```javascript
// Performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
```

---

## 🧪 **Testing Strategy**

### **🔬 Testing Framework**
```javascript
// Component testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import MenuCard from '../MenuCard';

const renderWithChakra = (component) => {
  return render(
    <ChakraProvider>
      {component}
    </ChakraProvider>
  );
};

test('renders menu item correctly', () => {
  const mockItem = {
    id: 1,
    name: 'Pizza Margherita',
    price: 12.99,
    category: 'Pizza'
  };

  renderWithChakra(<MenuCard item={mockItem} />);
  
  expect(screen.getByText('Pizza Margherita')).toBeInTheDocument();
  expect(screen.getByText('$12.99')).toBeInTheDocument();
});
```

### **📊 Test Coverage**
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full user flow testing
- **Accessibility Tests**: WCAG compliance testing

---

## 🚀 **Deployment & DevOps**

### **🌐 Production Build**
```bash
# Create optimized production build
npm run build

# Serve static files
npx serve -s build

# Deploy to various platforms
# Netlify, Vercel, AWS S3, etc.
```

### **📦 Docker Configuration**
```dockerfile
# Dockerfile for containerization
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **🔄 CI/CD Pipeline**
```yaml
# GitHub Actions workflow
name: Deploy Rest-360
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - name: Deploy to production
        run: |
          # Deployment commands
```

---

## 📱 **Mobile Experience**

### **📲 Progressive Web App Features**
- **Service Workers**: Offline functionality
- **App Manifest**: Add to home screen capability
- **Push Notifications**: Order status updates
- **Background Sync**: Offline order queuing

### **🤖 Mobile Optimization**
- **Touch Gestures**: Swipe navigation support
- **Viewport Optimization**: Proper meta viewport configuration
- **Fast Tap**: Eliminate 300ms click delay
- **Hardware Acceleration**: CSS transforms for smooth animations

---

## 🔐 **Security Features**

### **🛡️ Security Measures**
- **Input Validation**: Client-side form validation
- **XSS Protection**: Sanitized user inputs
- **HTTPS Enforcement**: Secure data transmission
- **Environment Variables**: Secure API key management

### **🔒 Data Protection**
```javascript
// Input sanitization
const sanitizeInput = (input) => {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
};

// Secure API calls
const secureApiCall = async (endpoint, data) => {
  const sanitizedData = Object.keys(data).reduce((acc, key) => {
    acc[key] = sanitizeInput(data[key]);
    return acc;
  }, {});
  
  return await api.post(endpoint, sanitizedData);
};
```

---

## 🌟 **Future Enhancements**

### **🚀 Planned Features**
- **💳 Payment Integration**: Stripe/PayPal integration
- **🔔 Real-time Notifications**: WebSocket implementation
- **📊 Analytics Dashboard**: Business intelligence features
- **🌍 Multi-language Support**: i18n implementation
- **🎯 AI Recommendations**: Machine learning-based suggestions

### **⚡ Technical Roadmap**
- **TypeScript Migration**: Enhanced type safety
- **GraphQL Integration**: Efficient data fetching
- **Micro-frontend Architecture**: Scalable modular design
- **Advanced Testing**: Visual regression testing
- **Performance Monitoring**: Real-time performance tracking

---

## 👥 **Collaboration**

### **🤝 Team Collaboration**
- **3 Contributors**: Collaborative development effort
- **Code Reviews**: Pull request review process
- **Documentation**: Comprehensive project documentation
- **Best Practices**: Consistent coding standards

### **📚 Knowledge Sharing**
- **Technical Documentation**: Architecture and API documentation
- **Component Library**: Reusable component documentation
- **Style Guide**: Design system documentation
- **Deployment Guide**: Production deployment procedures

---

## 📊 **Project Impact**

### **✅ Technical Achievements**
- **Modern React Architecture**: Latest React patterns and hooks
- **Responsive Design**: Mobile-first responsive implementation
- **Component Reusability**: Modular and maintainable code
- **Performance Optimization**: Fast loading and smooth interactions
- **Accessibility Compliance**: WCAG 2.1 AA standards

### **🎯 Business Value**
- **User Experience**: Intuitive and engaging interface
- **Operational Efficiency**: Streamlined restaurant operations
- **Scalability**: Prepared for future feature expansion
- **Maintainability**: Clean and documented codebase
- **Cost Effectiveness**: Efficient development and deployment

---

## 📄 **License & Attribution**

MIT License - Feel free to use, modify, and distribute this project.

**Technologies Used:**
- React.js for frontend framework
- Chakra UI for component library
- SCSS for advanced styling
- React Router for navigation

---

<div align="center">
  <h3>🍽️ Bringing restaurant management into the digital age</h3>
  <p><strong>Created by Alfonso Cifuentes Alonso</strong></p>
  <p>🔗 <a href="https://github.com/AlfonsoCifuentes/rest-360">View on GitHub</a></p>
</div>
