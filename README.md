# MongoDB Analytics Tool

A Tool for analyzing data from MongoDB.

**Features**

- SQL Code Editor(with Completion)
- Data in Tabular Form
- Graphs and Charts
- Saved Queries
- Export to CSV
- Export to JSON

---

## Available Scripts

> Note: Need to configure `.env` file to use local server

**Install Dependencies**

```bash
npm install
```

**Setup Pre-commit**

```bash
npm run prepare
```

**Start Development Server**

```bash
npm run develop
```

**Build for Production**

```bash
npm run build
```

**Start Production Server**

```bash
npm start
```

---

## Docker Config

**Build Image**

```bash
docker build
```

**Run Image**

```bash
docker run -p 5000:5000 <image-id>
```
