    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];

    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];


    const coursesRange = (requiredRange) => {

        if (requiredRange[0] == null && requiredRange[1] == null) {
            return courses
        };

        const coursesFilter = courses.filter((item) => {
            
            const minPrice = item.prices[0];
            const maxPrice = item.prices[1];

            if (requiredRange[0] == null) {
                return requiredRange[1] >= minPrice;
            }
            else if (requiredRange[1] == null) {
                return requiredRange[0] <= minPrice || requiredRange[0] <= maxPrice || maxPrice == null;
            }   

            return requiredRange[1] >= minPrice && (requiredRange[0] <= maxPrice || maxPrice == null);
            
            
        });
        
        return coursesFilter;
    }

    console.log(coursesRange(requiredRange1));
    console.log(coursesRange(requiredRange2));
    console.log(coursesRange(requiredRange3));