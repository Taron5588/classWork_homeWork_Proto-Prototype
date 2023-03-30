const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
let currentPage = 0
const Pagination = {
    init(array, pageSize) {
        const arr =[]
        for(let i = 0; i < array.length; i += pageSize) {
            arrLast = []            
            for(let j = 0; j < pageSize; j++){
                if(typeof array[j+i] !== 'undefined') {
                    arrLast.push(array[j+i])
                }                
            }
            arr.push(arrLast)            
    }
        return arr  // our book is ready
    },
    prevPage() {
        if(currentPage) {
            currentPage -=1
        }
    },
    nextPage() {
        if(currentPage < book.length) {
        return currentPage +=1
        }
    },
    firstPage() {
        return currentPage = 0
    },
    lastPage() {
        return currentPage = book.length - 1
    },
    goToPage(numOfPage) { 
        if(numOfPage < book.length) {
            return currentPage = numOfPage
        }
    },
    getPageItem(){
        return book[currentPage]
    },

}
const book = Pagination.init(alphabetArray, 5)
console.log(book)
console.log(Pagination.getPageItem())
Pagination.nextPage()
console.log(Pagination.getPageItem())
Pagination.lastPage()
console.log(Pagination.getPageItem())
Pagination.goToPage(3)
console.log(Pagination.getPageItem())
Pagination.firstPage()
console.log(Pagination.getPageItem())
Pagination.prevPage()
console.log(Pagination.getPageItem())