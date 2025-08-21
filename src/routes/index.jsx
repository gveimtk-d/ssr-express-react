import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}