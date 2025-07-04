// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import ApiDataFetchDisplay from "./components/ApiDataFetchDisplay/ApiDataFetchDisplay";
// import Calculator from "./components/calculator/Calculator";
// import CounterApp from "./components/counterApp/CounterApp";
// import LoginForm from "./components/counterWithContextAPi/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/counterWithContextAPi/Dashboard";
// import NotFound from "./components/counterWithContextAPi/NotFound";
// import PrivateRoute from "./components/counterWithContextAPi/PrivateRoute";
// import DebounceSearch from "./components/debounceSearch/DebounceSearch";
// import DragNdrop from "./components/dragNdrop/DragNdrop";
// import DynamicForm from "./components/dynamicForm/DynamicForm";
// import DynamicGreeting from "./components/dynamicGreeting/DynamicGreeting";
// import FileUpload from "./components/fileUploadNpreview/FileUpload";

import { Suspense } from "react";
// import Dashboard from "./components/lazyLoading/Dashboard";
import { lazy } from "react";
// import LearnCustomHook from "./components/learnCustomHook/LearnCustomHook";
import Counter from "./components/ReduxComponents/Counter";
// const About = lazy(() => import("./components/lazyLoading/About"));
// const Contact = lazy(() => import("./components/lazyLoading/Contact"));

// import FilterInTable from "./components/FilterInTable/FilterInTable";
// import ImageCarousel from "./components/imageCarousel/ImageCarousel";
// import Index from "./components/memoization/Index";
// import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
// import StopwatchOrTimer from "./components/stopwatchOrTimer/StopwatchOrTimer";
// import TodoApp from "./components/todoList/TodoApp";

export default function App() {
    return (
        <div className="App">
            {/* <SimpleForm /> */}
            {/* <ApiDataFetchDisplay /> */}
            {/* <Calculator /> */}
            {/* <CounterApp /> */}
            {/* <LoginForm /> */}
            {/* <DebounceSearch /> */}
            {/* <DragNdrop /> */}
            {/* <DynamicForm /> */}
            {/* <DynamicGreeting /> */}
            {/* <FileUpload /> */}
            {/* <FilterInTable /> */}
            {/* <ImageCarousel /> */}
            {/* <Dashboard /> */}
            {/* <LearnCustomHook /> */}
            {/* <Index /> */}
            {/* <MultiStepForm /> */}
            {/* <Counter /> */}
            {/* <StopwatchOrTimer /> */}
            {/* <TodoApp /> */}
        </div>
    );

    // return (
    //     <Suspense fallback={"loading....."}>/
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/" element={<Dashboard />}></Route>
    //                 <Route path="/about" element={<About />}></Route>
    //                 <Route path="/contact" element={<Contact />}></Route>
    //             </Routes>
    //         </BrowserRouter>
    //     </Suspense>
    // );

    // return (
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/" element={<LoginForm />}></Route>
    //                 <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
    //                 <Route path="*" element={<NotFound />}></Route>
    //             </Routes>
    //         </BrowserRouter>
    // );
}
