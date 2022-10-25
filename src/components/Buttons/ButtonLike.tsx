import React from "react";
import { ButtonProps } from "../../intarfaces/button-interface";

const ButtonLike: React.FC<ButtonProps> = ({ logGritting }) => {
  return (
    <button className="btn-like" onClick={() => logGritting()}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.292 19.15C18.218 19.636 17.794 20 17.292 20H17.28H7V10.212L10.608 2.094C11.415 2.352 12 3.108 12 4V8C12 8.552 12.447 9 13 9H18.674C18.728 9.002 18.78 9.003 18.832 9.011C19.097 9.051 19.33 9.192 19.488 9.407C19.646 9.622 19.712 9.885 19.672 10.148L18.292 19.15ZM5 20H3C2.449 20 2 19.551 2 19V12C2 11.448 2.449 11 3 11H5V20ZM21.099 8.22C20.623 7.575 19.925 7.154 19.132 7.033C18.972 7.009 18.814 7.004 18.66 7H14V4C14 1.794 12.206 0 10 0C9.605 0 9.247 0.233 9.086 0.593L5.35 9H3C1.346 9 0 10.345 0 12V19C0 20.654 1.346 22 3 22H17.269H17.304C18.776 22 20.048 20.909 20.269 19.451L21.648 10.45C21.77 9.657 21.574 8.866 21.099 8.22Z"
          fill="#313037"
        />
      </svg>
    </button>
  );
};

export default ButtonLike;
