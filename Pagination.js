const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
let currentPage = 0
const Pagination = {
    init(array, pageSize) {
        let arr =[]
        let subArr = []
        for(let i = 0; i < array.length; i++) {
            subArr.push(array[i])
            if(subArr.length === pageSize || i === array.length - 1) {
                arr.push(subArr)
                subArr = []
            }
            // for(let j = 0; j < pageSize; j++){
            //     if(typeof array[j+i] !== 'undefined') {
            //         arrLast.push(array[j+i])
            //     }                
            // }           
    }
        return arr  // our book is ready
    },
    prevPage() {
        if(currentPage) {
            currentPage -= 1
        }
        return Pagination
    },
    nextPage() {
        if(currentPage < book.length - 1) {
        currentPage += 1
        }
        return Pagination
    },
    firstPage() {
        currentPage = 0
        return Pagination
    },
    lastPage() {
        currentPage = book.length - 1
        return Pagination
    },
    goToPage(numOfPage) { 
        if(numOfPage < book.length) {
            currentPage = numOfPage
        }
        return Pagination
    },
    getPageItem(){
        return book[currentPage]
    },

}
const book = Pagination.init(alphabetArray, 4)
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
 Pagination.nextPage().nextPage()
 console.log(Pagination.getPageItem())
 Pagination.nextPage().nextPage().nextPage().nextPage().nextPage().nextPage()
 console.log(Pagination.getPageItem())

