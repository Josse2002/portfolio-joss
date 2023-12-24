export function CardInfo(){
    return(
        <div className="w-full md:w-1/2 p-4 md:p-8 text-black bg-white rounded-b-lg md:rounded-r-lg">
          <h3 className="tracking-tight text-2xl md:text-4xl font-bold mb-4">Proyecto numero 1</h3>
          <div className="text-sm text-muted-foreground mb-6">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#bd1e59] text-white">
            Read the full client story
          </button>
        </div>
    );
}