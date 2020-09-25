import React from "react";
import { useSpring, animated } from "react-spring";
import classes from "./WateryName.module.css";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const WateryName = () => {
  const { freq, scale, transform, opacity } = useSpring({
    from: {
      scale: 0,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0",
    },
    to: {
      scale: 150,
      opacity: 1,
      transform: "scale(1)",
      freq: "0.0, 0.0",
    },
    config: { duration: 3000 },
  });

  return (
    <div className={classes.WateryName}>
      <animated.svg
        style={{ transform, opacity }}
        viewBox="0 0 3851.564 379.891"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves={1}
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={scale}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <animated.path
            d="M 233.398 375 L 70.068 187.988 L 13.184 240.479 L 13.184 375 L 0 375 L 0 19.531 L 13.184 19.531 L 13.184 225.098 L 71.777 167.725 L 219.238 19.531 L 238.281 19.531 L 79.834 178.955 L 250.488 375 L 233.398 375 Z M 675.537 0 L 675.537 172.363 A 116.846 116.846 0 0 1 695.522 140.036 A 105.182 105.182 0 0 1 713.623 123.779 Q 738.77 105.957 769.287 105.957 Q 799.377 105.957 818.503 118.022 A 61.251 61.251 0 0 1 832.397 130.005 A 75.868 75.868 0 0 1 846.176 154.662 Q 853.13 174.549 853.271 202.637 L 853.271 375 L 840.088 375 L 840.088 202.148 A 170.38 170.38 0 0 0 838.618 180.001 Q 835.037 153.934 822.754 139.282 A 52.843 52.843 0 0 0 798.511 123.228 Q 789.676 120.25 778.83 119.319 A 120.276 120.276 0 0 0 768.555 118.896 Q 734.375 118.896 709.351 143.188 A 117.92 117.92 0 0 0 680.353 189.163 A 150.15 150.15 0 0 0 675.537 205.811 L 675.537 375 L 662.354 375 L 662.354 0 L 675.537 0 Z M 2360.107 0 L 2360.107 172.363 A 116.846 116.846 0 0 1 2380.093 140.036 A 105.182 105.182 0 0 1 2398.193 123.779 Q 2423.34 105.957 2453.857 105.957 Q 2483.947 105.957 2503.074 118.022 A 61.251 61.251 0 0 1 2516.968 130.005 A 75.868 75.868 0 0 1 2530.746 154.662 Q 2537.701 174.549 2537.842 202.637 L 2537.842 375 L 2524.658 375 L 2524.658 202.148 A 170.38 170.38 0 0 0 2523.188 180.001 Q 2519.608 153.934 2507.324 139.282 A 52.843 52.843 0 0 0 2483.082 123.228 Q 2474.246 120.25 2463.4 119.319 A 120.276 120.276 0 0 0 2453.125 118.896 Q 2418.945 118.896 2393.921 143.188 A 117.92 117.92 0 0 0 2364.923 189.163 A 150.15 150.15 0 0 0 2360.107 205.811 L 2360.107 375 L 2346.924 375 L 2346.924 0 L 2360.107 0 Z M 3055.908 0 L 3055.908 172.363 A 116.846 116.846 0 0 1 3075.893 140.036 A 105.182 105.182 0 0 1 3093.994 123.779 Q 3119.141 105.957 3149.658 105.957 Q 3179.748 105.957 3198.875 118.022 A 61.251 61.251 0 0 1 3212.769 130.005 A 75.868 75.868 0 0 1 3226.547 154.662 Q 3233.501 174.549 3233.643 202.637 L 3233.643 375 L 3220.459 375 L 3220.459 202.148 A 170.38 170.38 0 0 0 3218.989 180.001 Q 3215.408 153.934 3203.125 139.282 A 52.843 52.843 0 0 0 3178.883 123.228 Q 3170.047 120.25 3159.201 119.319 A 120.276 120.276 0 0 0 3148.926 118.896 Q 3114.746 118.896 3089.722 143.188 A 117.92 117.92 0 0 0 3060.724 189.163 A 150.15 150.15 0 0 0 3055.908 205.811 L 3055.908 375 L 3042.725 375 L 3042.725 0 L 3055.908 0 Z M 3765.137 375 L 3643.555 232.178 L 3643.066 232.666 L 3604.736 265.625 L 3604.736 375 L 3591.553 375 L 3591.553 0 L 3604.736 0 L 3604.736 251.221 L 3635.742 221.924 L 3755.859 110.84 L 3774.658 110.84 L 3653.32 223.389 L 3782.227 375 L 3765.137 375 Z M 589.355 181.396 L 575.928 181.396 A 53.445 53.445 0 0 0 558.111 140.967 A 73.732 73.732 0 0 0 553.467 136.963 A 79.253 79.253 0 0 0 522.094 122.11 Q 509.623 119.141 494.873 119.141 A 128.559 128.559 0 0 0 472.799 120.919 Q 453.259 124.329 439.941 134.277 A 56.084 56.084 0 0 0 427.994 146.134 A 43.079 43.079 0 0 0 419.678 172.119 A 67.937 67.937 0 0 0 420.493 182.987 Q 422.161 193.266 427.246 200.073 Q 432.797 207.504 443.469 213.884 A 103.612 103.612 0 0 0 451.904 218.384 A 136.361 136.361 0 0 0 464.111 223.436 Q 479.218 228.928 501.709 234.131 A 329.747 329.747 0 0 1 520.821 239.123 Q 530.598 242.013 538.759 245.221 A 136.024 136.024 0 0 1 553.467 251.953 Q 569.162 260.405 577.726 271.427 A 51.479 51.479 0 0 1 581.055 276.245 A 56.89 56.89 0 0 1 588.135 294.833 A 80.068 80.068 0 0 1 589.6 310.547 Q 589.6 340.698 565.736 359.486 A 79.556 79.556 0 0 1 563.965 360.84 Q 538.33 379.883 496.826 379.883 A 159.883 159.883 0 0 1 467.112 377.282 Q 449.693 373.985 435.843 366.51 A 88.898 88.898 0 0 1 425.171 359.741 A 71.737 71.737 0 0 1 408.123 342.332 A 60.157 60.157 0 0 1 397.949 307.861 L 411.133 307.861 A 58.633 58.633 0 0 0 417.139 330.553 A 55.391 55.391 0 0 0 435.669 351.196 A 80.501 80.501 0 0 0 459.418 362.063 Q 470.123 365.105 482.888 366.151 A 170.785 170.785 0 0 0 496.826 366.699 A 124.195 124.195 0 0 0 521.268 364.43 Q 536.235 361.425 547.99 354.442 A 72.582 72.582 0 0 0 554.321 350.22 A 64.118 64.118 0 0 0 566.673 338.362 A 44.479 44.479 0 0 0 576.416 310.303 A 50.261 50.261 0 0 0 554.606 268.883 Q 534.119 253.269 494.385 244.873 A 333.689 333.689 0 0 1 470.304 238.874 Q 447.12 232.095 433.381 223.436 A 65.193 65.193 0 0 1 425.781 217.896 A 53.999 53.999 0 0 1 407.064 182.146 A 77.373 77.373 0 0 1 406.494 172.607 A 56.608 56.608 0 0 1 425.28 129.616 A 76.676 76.676 0 0 1 431.03 124.756 A 87.492 87.492 0 0 1 464.079 109.365 Q 476.38 106.383 490.731 106.01 A 159.534 159.534 0 0 1 494.873 105.957 Q 530.327 105.957 554.181 119.995 A 83.165 83.165 0 0 1 563.477 126.343 A 65.278 65.278 0 0 1 589.046 173.984 A 87.003 87.003 0 0 1 589.355 181.396 Z M 1989.99 375 L 1976.563 375 L 1976.563 332.275 A 86.225 86.225 0 0 1 1942.383 367.065 A 91.163 91.163 0 0 1 1917.817 376.475 Q 1906.89 379.031 1894.174 379.67 A 172.918 172.918 0 0 1 1885.498 379.883 A 117.678 117.678 0 0 1 1860.6 377.415 Q 1844.737 373.98 1832.964 365.762 A 65.238 65.238 0 0 1 1820.679 354.614 Q 1799.072 329.346 1798.584 281.006 L 1798.584 110.84 L 1811.768 110.84 L 1811.768 281.494 Q 1812.087 308.969 1820.141 327.718 A 67.09 67.09 0 0 0 1830.811 345.093 A 59.729 59.729 0 0 0 1862.99 364.261 Q 1872.878 366.661 1884.636 366.699 A 117.185 117.185 0 0 0 1885.01 366.699 A 131.203 131.203 0 0 0 1911.336 364.206 Q 1927.73 360.848 1940.531 352.968 A 77.793 77.793 0 0 0 1946.533 348.877 A 74.671 74.671 0 0 0 1971.621 314.681 A 105.054 105.054 0 0 0 1976.562 296.631 L 1976.563 110.84 L 1989.99 110.84 L 1989.99 375 Z M 2806.396 375 L 2791.26 375 A 97.344 97.344 0 0 1 2788.685 363.041 Q 2786.377 348.312 2786.377 326.66 Q 2770.752 352.051 2743.652 365.967 A 126.304 126.304 0 0 1 2699.02 379.013 A 155.918 155.918 0 0 1 2682.373 379.883 A 109.547 109.547 0 0 1 2656.916 377.085 A 75.942 75.942 0 0 1 2623.413 359.985 A 65.433 65.433 0 0 1 2601.163 312.087 A 88.421 88.421 0 0 1 2601.074 308.105 A 64.723 64.723 0 0 1 2623.593 257.818 A 91.047 91.047 0 0 1 2633.911 249.878 Q 2661.297 231.655 2703.71 228.29 A 249.417 249.417 0 0 1 2721.191 227.539 L 2786.377 227.539 L 2786.377 188.965 A 84.596 84.596 0 0 0 2783.797 167.46 A 58.768 58.768 0 0 0 2765.503 137.451 A 67.99 67.99 0 0 0 2740.608 123.862 Q 2730.355 120.653 2717.964 119.625 A 147.077 147.077 0 0 0 2705.811 119.141 A 116.09 116.09 0 0 0 2677.696 122.382 A 86.563 86.563 0 0 0 2645.508 137.695 Q 2621.338 156.25 2621.338 183.594 L 2608.154 183.105 A 65.246 65.246 0 0 1 2628.975 135.021 A 94.347 94.347 0 0 1 2636.475 128.418 A 103.079 103.079 0 0 1 2688.474 107.032 A 135.977 135.977 0 0 1 2705.811 105.957 A 138.471 138.471 0 0 1 2733.679 108.597 Q 2757.376 113.467 2773.682 127.319 Q 2798.828 148.682 2799.561 187.5 L 2799.561 313.721 A 436.822 436.822 0 0 0 2799.936 332.562 Q 2801.089 359.131 2805.779 371.297 A 36.612 36.612 0 0 0 2806.396 372.803 L 2806.396 375 Z M 2061.035 243.652 L 2061.035 240.234 A 242.306 242.306 0 0 1 2063.9 201.722 Q 2067.195 181.296 2074.277 164.814 A 113.392 113.392 0 0 1 2087.646 141.479 A 84.703 84.703 0 0 1 2149.335 106.514 A 112.162 112.162 0 0 1 2160.645 105.957 A 112.174 112.174 0 0 1 2190.277 109.733 A 93.804 93.804 0 0 1 2213.257 119.385 A 93.669 93.669 0 0 1 2242.367 146.579 A 119.697 119.697 0 0 1 2250.244 159.424 L 2250.244 0 L 2263.428 0 L 2263.428 375 L 2250.244 375 L 2250.244 332.764 A 92.004 92.004 0 0 1 2213.379 367.554 A 107.45 107.45 0 0 1 2174.652 379.112 A 133.357 133.357 0 0 1 2160.156 379.883 A 92.924 92.924 0 0 1 2124.862 373.408 Q 2104.054 364.952 2089.103 345.451 A 107.93 107.93 0 0 1 2087.646 343.506 Q 2065.931 313.821 2061.936 266.09 A 269.195 269.195 0 0 1 2061.035 243.652 Z M 1619.385 375 L 1504.883 375 L 1504.883 19.531 L 1598.389 19.531 Q 1634.331 19.531 1659.302 28.682 A 92.573 92.573 0 0 1 1685.181 42.847 A 75.561 75.561 0 0 1 1712.929 90.619 A 114.014 114.014 0 0 1 1714.6 110.596 A 104.54 104.54 0 0 1 1711.9 134.967 A 76.073 76.073 0 0 1 1698.242 164.063 A 70.534 70.534 0 0 1 1663.646 188.147 A 94.504 94.504 0 0 1 1652.1 191.162 Q 1685.791 195.557 1708.252 220.337 Q 1730.713 245.117 1730.713 277.1 A 112.771 112.771 0 0 1 1726.576 308.462 A 84.214 84.214 0 0 1 1701.294 348.755 A 97.503 97.503 0 0 1 1662.545 369.518 Q 1648.167 373.629 1631.078 374.657 A 194.803 194.803 0 0 1 1619.385 375 Z M 2900.635 39.551 L 2914.063 39.551 L 2914.063 110.84 L 2974.121 110.84 L 2974.121 124.268 L 2914.063 124.268 L 2914.063 311.768 A 137.411 137.411 0 0 0 2914.787 326.402 Q 2916.637 343.62 2923.218 353.271 A 29.006 29.006 0 0 0 2939.478 364.811 Q 2944.603 366.341 2950.867 366.631 A 64.683 64.683 0 0 0 2953.857 366.699 A 132.763 132.763 0 0 0 2962.566 366.39 Q 2967.32 366.076 2972.747 365.444 A 282.439 282.439 0 0 0 2979.98 364.502 L 2982.178 376.953 Q 2976.062 379.177 2963.336 379.713 A 208.78 208.78 0 0 1 2954.59 379.883 A 81.786 81.786 0 0 1 2939.679 378.618 Q 2922.279 375.385 2913.33 363.892 A 49.41 49.41 0 0 1 2905.957 350.017 Q 2900.791 335.529 2900.635 313.477 L 2900.635 124.268 L 2851.807 124.268 L 2851.807 110.84 L 2900.635 110.84 L 2900.635 39.551 Z M 1329.102 108.643 L 1327.637 120.361 L 1310.547 118.896 A 85.57 85.57 0 0 0 1280.93 123.859 A 75.969 75.969 0 0 0 1254.15 140.747 A 93.474 93.474 0 0 0 1233.335 171.348 Q 1227.963 183.733 1224.961 198.766 A 168.995 168.995 0 0 0 1224.365 201.904 L 1224.365 375 L 1211.182 375 L 1211.182 110.84 L 1224.365 110.84 L 1224.365 165.771 A 105.129 105.129 0 0 1 1239.587 138.697 A 91.137 91.137 0 0 1 1256.592 122.07 A 78.698 78.698 0 0 1 1288.627 108.038 A 110.081 110.081 0 0 1 1310.547 105.957 Q 1318.486 105.957 1324.322 107.243 A 34.281 34.281 0 0 1 1329.102 108.643 Z M 916.016 249.512 L 916.016 237.793 A 169.336 169.336 0 0 1 920.485 198.178 A 140.953 140.953 0 0 1 930.542 169.8 Q 945.068 139.648 971.558 122.803 A 108.414 108.414 0 0 1 1027.34 106.023 A 130.302 130.302 0 0 1 1031.494 105.957 A 115.422 115.422 0 0 1 1071.23 112.67 A 106.677 106.677 0 0 1 1091.064 122.314 Q 1117.432 138.672 1132.202 168.701 A 146.6 146.6 0 0 1 1146.183 217.967 A 180.611 180.611 0 0 1 1147.217 236.328 L 1147.217 248.047 A 172.649 172.649 0 0 1 1143.152 286.239 A 140.821 140.821 0 0 1 1132.812 316.162 A 114.467 114.467 0 0 1 1107.295 351.221 A 108.272 108.272 0 0 1 1091.919 363.037 A 108.414 108.414 0 0 1 1036.136 379.817 A 130.302 130.302 0 0 1 1031.982 379.883 A 115.242 115.242 0 0 1 991.984 373.07 A 106.578 106.578 0 0 1 972.046 363.281 A 110.286 110.286 0 0 1 932.786 320.459 A 132.054 132.054 0 0 1 930.908 316.772 A 146.444 146.444 0 0 1 917.038 267.723 A 179.942 179.942 0 0 1 916.016 249.512 Z M 3296.387 249.512 L 3296.387 237.793 A 169.336 169.336 0 0 1 3300.856 198.178 A 140.953 140.953 0 0 1 3310.913 169.8 Q 3325.439 139.648 3351.929 122.803 A 108.414 108.414 0 0 1 3407.712 106.023 A 130.302 130.302 0 0 1 3411.865 105.957 A 115.422 115.422 0 0 1 3451.601 112.67 A 106.677 106.677 0 0 1 3471.436 122.314 Q 3497.803 138.672 3512.573 168.701 A 146.6 146.6 0 0 1 3526.554 217.967 A 180.611 180.611 0 0 1 3527.588 236.328 L 3527.588 248.047 A 172.649 172.649 0 0 1 3523.523 286.239 A 140.821 140.821 0 0 1 3513.184 316.162 A 114.467 114.467 0 0 1 3487.666 351.221 A 108.272 108.272 0 0 1 3472.29 363.037 A 108.414 108.414 0 0 1 3416.507 379.817 A 130.302 130.302 0 0 1 3412.354 379.883 A 115.242 115.242 0 0 1 3372.355 373.07 A 106.578 106.578 0 0 1 3352.417 363.281 A 110.286 110.286 0 0 1 3313.157 320.459 A 132.054 132.054 0 0 1 3311.279 316.772 A 146.444 146.444 0 0 1 3297.409 267.723 A 179.942 179.942 0 0 1 3296.387 249.512 Z M 929.199 240.234 L 929.199 248.047 A 144.67 144.67 0 0 0 935.233 290.313 A 130.628 130.628 0 0 0 942.261 308.472 Q 955.322 335.938 978.638 351.318 A 93.403 93.403 0 0 0 1026.411 366.564 A 113.723 113.723 0 0 0 1031.982 366.699 Q 1077.148 366.699 1105.591 332.764 A 118.999 118.999 0 0 0 1130.823 279.08 A 168.798 168.798 0 0 0 1134.033 245.361 L 1134.033 237.793 A 139.779 139.779 0 0 0 1125.497 188.697 A 132.388 132.388 0 0 0 1120.85 177.734 A 111.295 111.295 0 0 0 1101.772 149.394 A 98.538 98.538 0 0 0 1084.351 134.644 A 93.11 93.11 0 0 0 1032.416 119.144 A 112.032 112.032 0 0 0 1031.494 119.141 Q 986.328 119.141 957.764 153.564 A 122.335 122.335 0 0 0 931.335 212.995 A 167.343 167.343 0 0 0 929.199 240.234 Z M 3309.57 240.234 L 3309.57 248.047 A 144.67 144.67 0 0 0 3315.604 290.313 A 130.628 130.628 0 0 0 3322.632 308.472 Q 3335.693 335.938 3359.009 351.318 A 93.403 93.403 0 0 0 3406.782 366.564 A 113.723 113.723 0 0 0 3412.354 366.699 Q 3457.52 366.699 3485.962 332.764 A 118.999 118.999 0 0 0 3511.194 279.08 A 168.798 168.798 0 0 0 3514.404 245.361 L 3514.404 237.793 A 139.779 139.779 0 0 0 3505.868 188.697 A 132.388 132.388 0 0 0 3501.221 177.734 A 111.295 111.295 0 0 0 3482.143 149.394 A 98.538 98.538 0 0 0 3464.722 134.644 A 93.11 93.11 0 0 0 3412.787 119.144 A 112.032 112.032 0 0 0 3411.865 119.141 Q 3366.699 119.141 3338.135 153.564 A 122.335 122.335 0 0 0 3311.706 212.995 A 167.343 167.343 0 0 0 3309.57 240.234 Z M 2250.244 309.57 L 2250.244 185.791 A 118.217 118.217 0 0 0 2233.682 153.199 Q 2208.394 119.141 2160.4 119.141 A 81.957 81.957 0 0 0 2130.954 124.218 Q 2110.875 131.884 2097.29 151.123 Q 2074.707 183.105 2074.707 245.361 A 229.769 229.769 0 0 0 2077.214 280.43 Q 2080.002 298.448 2085.89 313.18 A 108.488 108.488 0 0 0 2096.924 334.106 Q 2117.687 364.567 2154.656 366.56 A 97.632 97.632 0 0 0 2159.912 366.699 A 123.193 123.193 0 0 0 2186.715 363.919 A 92.033 92.033 0 0 0 2215.82 352.173 A 83.888 83.888 0 0 0 2246.391 318.115 A 106.565 106.565 0 0 0 2250.244 309.57 Z M 1625.977 199.463 L 1518.066 199.463 L 1518.066 361.816 L 1620.85 361.816 A 147.269 147.269 0 0 0 1649.457 359.207 Q 1674.819 354.181 1691.772 339.478 A 73.079 73.079 0 0 0 1716.297 294.068 A 105.924 105.924 0 0 0 1717.529 277.588 A 74.272 74.272 0 0 0 1711.304 246.857 A 72.203 72.203 0 0 0 1692.627 222.046 A 87.078 87.078 0 0 0 1656.57 203.399 Q 1642.611 199.755 1625.977 199.463 Z M 1518.066 32.715 L 1518.066 186.279 L 1603.271 186.279 A 202.371 202.371 0 0 0 1630.01 184.633 Q 1659.176 180.735 1676.514 167.603 A 59.462 59.462 0 0 0 1698.258 134.205 Q 1700.944 123.996 1701.154 111.715 A 122.697 122.697 0 0 0 1701.172 109.619 Q 1701.172 43.705 1625.434 34.271 A 216.972 216.972 0 0 0 1601.318 32.715 L 1518.066 32.715 Z M 326.904 110.84 L 326.904 375 L 313.721 375 L 313.721 110.84 L 326.904 110.84 Z M 3844.482 110.84 L 3844.482 375 L 3831.299 375 L 3831.299 110.84 L 3844.482 110.84 Z M 2786.377 303.711 L 2786.377 240.967 L 2725.342 240.967 Q 2668.701 240.967 2638.672 263.428 A 67.893 67.893 0 0 0 2624.277 277.755 A 52.011 52.011 0 0 0 2614.258 309.082 A 51.865 51.865 0 0 0 2630.928 347.693 A 69.279 69.279 0 0 0 2633.545 350.098 A 67.438 67.438 0 0 0 2668.666 365.955 A 91.89 91.89 0 0 0 2682.373 366.943 A 139.076 139.076 0 0 0 2713.873 363.535 A 106.441 106.441 0 0 0 2746.216 350.342 A 102.83 102.83 0 0 0 2786.377 303.711 Z M 310.791 18.677 A 13.365 13.365 0 0 0 306.885 28.32 A 16.031 16.031 0 0 0 306.886 28.495 A 12.936 12.936 0 0 0 310.791 37.842 A 13.427 13.427 0 0 0 314.265 40.38 A 13.285 13.285 0 0 0 320.313 41.748 A 13.365 13.365 0 0 0 329.956 37.842 A 15.404 15.404 0 0 0 330.204 37.596 A 12.73 12.73 0 0 0 333.984 28.32 A 13.691 13.691 0 0 0 333.345 24.098 A 13.451 13.451 0 0 0 329.956 18.677 A 16.234 16.234 0 0 0 329.83 18.552 A 13.136 13.136 0 0 0 320.312 14.648 A 15.435 15.435 0 0 0 319.963 14.652 A 12.729 12.729 0 0 0 310.791 18.677 Z M 3828.369 18.677 A 13.365 13.365 0 0 0 3824.463 28.32 A 16.031 16.031 0 0 0 3824.464 28.495 A 12.936 12.936 0 0 0 3828.369 37.842 A 13.427 13.427 0 0 0 3831.843 40.38 A 13.285 13.285 0 0 0 3837.891 41.748 A 13.365 13.365 0 0 0 3847.534 37.842 A 15.404 15.404 0 0 0 3847.782 37.596 A 12.73 12.73 0 0 0 3851.562 28.32 A 13.691 13.691 0 0 0 3850.923 24.098 A 13.451 13.451 0 0 0 3847.534 18.677 A 16.234 16.234 0 0 0 3847.408 18.552 A 13.136 13.136 0 0 0 3837.891 14.648 A 15.435 15.435 0 0 0 3837.541 14.652 A 12.729 12.729 0 0 0 3828.369 18.677 Z"
            fill="#c5124c"
          />
        </g>
      </animated.svg>
    </div>
  );
};

export default WateryName;