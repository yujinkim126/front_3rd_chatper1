/** @jsx createVNode */
import { createVNode } from "./lib";
import { globalStore } from "./stores";

export const App = ({ targetPage }) => {
  const PageComponent = targetPage ?? NotFoundPage;
  const error = globalStore.getState().error;

  return error ? (
    <div
      id="error-boundary"
      classsName="fixed bottom-4 left-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-75"
      role="alert"
    >
      <div classsName="flex justify-between items-center">
        <div>
          <strong classsName="font-bold">오류 발생!</strong>
          <span classsName="block sm:inline ml-1">
            {error.message || "알 수 없는 오류가 발생했습니다."}
          </span>
        </div>
        <button classsName="text-red-700 hover:text-red-900 font-semibold">
          &times;
        </button>
      </div>
    </div>
  ) : (
    PageComponent()
  );
};
