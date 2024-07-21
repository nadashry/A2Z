import Navbar from "./Navbar/Navbar";
import Foooter from "./Footer/Foooter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import BtnStart from "./BtnStart/BtnStart";
import Request from "./RequestCall/Request";
import Agency from "./Agency/Agency";
import NotFound from "./NotFound/NotFound";
// import CardDetail from "./PartThAgency/CardDetail";
import OneCard from "./PartThAgency/OneCard";
import Academy from "./Academy/Academy";
import Rports from "./ResoursePages/Rports";
import CardReports from "./ResoursePages/CardReports";
import CardDetails from "./ResoursePages/CardDetails";
import Knowledge from "./Knowledge/Knowledge";
import KnowledgeDetails from "./Knowledge/KnowledgeDetails";
import Blog from "./Blog/Blog";
import BlogDetails from "./Blog/BlogDetails";
import Job from "./Job/Job";
import Intership from "./Intership/Intership";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/startnow" element={<BtnStart/>}/>
      <Route path="/request" element={<Request/>}/>
      <Route path="/agency" element={<Agency/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/" element={<CardReports/>}/>
      <Route path="/reports" element={<Rports/>}/>
      <Route path="/knowledge" element={<Knowledge/>}/>
      <Route path="/reportss/:id" element={<CardDetails/>}/>
      <Route path="/knowledge/:id" element={<KnowledgeDetails/>}/>
      <Route path="/blog/:id" element={<BlogDetails/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/job" element={<Job/>}/>
      <Route path="/intership" element={<Intership/>}/>
      <Route path="/" element={<OneCard />} />
      {/* <Route path="/card/:id" element={<CardDetail />} /> */}
      <Route path="*" element={<NotFound/>} />
      </Routes>
      <Foooter/>
    </Router>
  );
}

export default App;
