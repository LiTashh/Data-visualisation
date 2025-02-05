let viz;
let viz2; // Змінна для другої візуалізації

const url = "https://public.tableau.com/views/finalProject_17333178391940/FinalProject?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"; // URL першої візуалізації 
const url2 = "https://public.tableau.com/views/TestTask_YouControl/TestTask_YouControl?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"; // URL другої візуалізації 

const vizContainer = document.getElementById('vizContainer');
const vizContainer2 = document.getElementById('vizContainer2'); // Контейнер для другої візуалізації

const options = {
    hideTabs: true,
    height: 600, // Змінено на 600, щоб відповідало CSS
    width: '100%', // Ширина тут не важна, оскільки вона задається в CSS

    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("First dashboard is interactive");
    }
};

const options2 = {
    hideTabs: true,
    height: 600, // Змінено на 600, щоб відповідало CSS
    width: '100%', // Ширина тут не важна, оскільки вона задається в CSS

    onFirstInteraction: function() {
        workbook2 = viz2.getWorkbook();
        activeSheet2 = workbook2.getActiveSheet();
        console.log("Second dashboard is interactive");
    }
};

function initViz() {
    viz = new tableau.Viz(vizContainer, url, options);
}

function initViz2() { // Функція для другої візуалізації
    viz2 = new tableau.Viz(vizContainer2, url2, options2);
}

document.addEventListener("DOMContentLoaded", function() {
    initViz();
    initViz2(); // Викликаємо функцію для другої візуалізації
});

// ... (решта коду для експорту - без змін)

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');

exportPDF.addEventListener("click", function() {
    //  ТУТ ПОТРІБНО ВИЗНАЧИТИ, ЯКУ ВІЗУАЛІЗАЦІЮ ЕКСПОРТУВАТИ (viz або viz2)
    if (viz) {
        viz.showExportPDFDialog();
    } else {
        console.error("Перша візуалізація не завантажена.");
    }
});

exportImage.addEventListener("click", function() {
        //  ТУТ ПОТРІБНО ВИЗНАЧИТИ, ЯКУ ВІЗУАЛІЗАЦІЮ ЕКСПОРТУВАТИ (viz або viz2)
    if (viz) {
        viz.showExportImageDialog();
    } else {
        console.error("Перша візуалізація не завантажена.");
    }
});
