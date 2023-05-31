import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ==============Components==============
import Loader from '../../Components/Loader';
import { ScrollToTop } from '../../Components/ScrollToTop';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
// ==============PAGES==============
const TodosPage = lazy(() => import('../../Pages/TodosPage'));
const PostPage = lazy(() => import('../../Pages/PostPage'));

function AppRouting() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouting;