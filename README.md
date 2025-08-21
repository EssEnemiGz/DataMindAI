# DataMindAI

An open-source, AI-powered data analysis and accounting assistant designed to simplify financial management. DataMindAI enables users to upload and analyze Excel spreadsheets, generate insightful reports, and receive intelligent feedback and recommendations using advanced AI models like OpenAI and Gemini.

## 🚀 Features

### ✅ Project Setup
- [ ] Backend API development (FastAPI/Python)
- [ ] Frontend application (React/Vite)
- [ ] Docker containerization
- [ ] Database setup and configuration
- [ ] Environment configuration
- [ ] Connect Frontend and Backend

### 🔐 User Management
- [ ] User registration system
- [ ] User login/logout (JWT or token-based authentication)
- [ ] User profile management
- [ ] User settings and preferences
- [ ] Password reset functionality
- [ ] Email verification

### 📊 Excel File Handling
- [ ] Excel file upload functionality
- [ ] Parse and read Excel data (multiple formats: .xlsx, .xls, .csv)
- [ ] Data format validation
- [ ] File size limits and security checks
- [ ] Support for multiple file uploads
- [ ] File storage and management

### 📈 Data Analysis Core
- [ ] Extract key financial metrics from Excel data
- [ ] Generate summary reports (income, expenses, balance)
- [ ] Basic statistics and trend analysis
- [ ] Data visualization (charts and graphs)
- [ ] Financial ratio calculations
- [ ] Budget vs actual comparisons

### 📋 Report Generation
- [ ] Export reports in PDF format
- [ ] Export reports in Excel format
- [ ] Send reports via email
- [ ] Customizable report templates
- [ ] Scheduled report generation
- [ ] Report history and archiving

### 🤖 AI Feedback Agent
- [ ] Integrate OpenAI API
- [ ] Integrate Google Gemini API
- [ ] Integrate Anthropic API
- [ ] Integrate Ollama
- [ ] Generate textual feedback from financial data
- [ ] Basic decision suggestions and recommendations
- [ ] Financial insights and analysis
- [ ] Anomaly detection in financial data
- [ ] Predictive analytics

### 🔌 API Endpoints
- [ ] REST API for all functions
- [ ] Authentication and authorization
- [ ] Comprehensive error handling
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Rate limiting and security
- [ ] Webhook support

### 🎨 User Interface
- [ ] Modern, responsive web interface
- [ ] Dashboard with key metrics
- [ ] File upload interface
- [ ] Report viewing and management
- [ ] Settings and profile pages
- [ ] Mobile-friendly design
- [ ] Chat for general use

### 🔧 Technical Features
- [ ] Database migrations
- [ ] Logging and monitoring
- [ ] Unit and integration tests
- [ ] CI/CD pipeline setup
- [ ] Performance optimization
- [ ] Security best practices implementation

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL
- **Authentication**: JWT
- **File Processing**: pandas, openpyxl
- **AI Integration**: OpenAI, Google Gemini APIs

### Frontend
- **Framework**: React with Vite
- **Styling**: CSS
- **Charts**: chart.js
- **HTTP Client**: axios

### DevOps
- Docker and Docker Compose

## 📋 Prerequisites

- Python 3.8+
- Node.js 16+
- Docker and Docker Compose
- OpenAI API key (for AI features)
- Google Gemini API key (for AI features)
- Anthropic API KEY (for AI features)
- If your don't have any API Key, you can use Ollama

## 🚀 Getting Started

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/EssEnemiGz/DataMindAI.git
   cd DataMindAI
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Configuration**
   Create the .env files based in the .env.example

5. **Run with Docker**
   ```bash
   docker-compose up --build
   ```

## 📁 Project Structure

```
DataMindAI/
├── backend/
│   ├── app/
│   │   ├── api/           # API endpoints
│   │   │   ├── core/          # Core configuration
│   │   │   ├── models/        # Database models
│   │   │   ├── services/      # Business logic
│   │   │   └── utils/         # Utility functions
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── pages/         # Page components
│   │   │   ├── services/      # API services
│   │   │   └── utils/         # Utility functions
│   │   ├── package.json
│   │   └── Dockerfile
│   ├── docker-compose.yml
│   └── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git switch -c your_branch`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin your_branch`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Create an issue for bug reports or feature requests
- Check the documentation for common questions
- Join our community discussions

## 🔮 Roadmap

- [ ] Multi-tenant support
- [ ] Advanced AI analytics
- [ ] Integration with accounting software like QuickBooks
- [ ] Real-time collaboration features
- [ ] Advanced reporting and dashboards
- [ ] More AI agents

---
