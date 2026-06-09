import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(async () => import("./HomePage").then((module) => ({ default: module.HomePage })));
const ProjectPage = lazy(async () =>
  import("./ProjectPage").then((module) => ({ default: module.ProjectPage })),
);
const NotFoundPage = lazy(async () =>
  import("./NotFoundPage").then((module) => ({ default: module.NotFoundPage })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/:slug" element={<ProjectPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
