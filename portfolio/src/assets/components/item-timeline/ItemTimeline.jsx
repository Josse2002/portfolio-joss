export function ItemTimeline({title, description}){
    return(
        <div>
            <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-green-black rounded-full -start-3 ring-8 ring-green-dark">
            <i class="fa-solid fa-book text-green-200"></i>
          </span>
          <h3 class="flex items-center mb-1 text-lg text-green-dark font-bold">
            {title}
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
          
        </li>
        </div>
    );
}