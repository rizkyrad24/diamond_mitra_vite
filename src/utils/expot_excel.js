import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

async function exportExcel(fileName, sheetName, title, headers, apiData) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);

    const lastColumn = headers.length;
  
    // 1. Menambahkan Judul di Paling Atas (Merge Cell)
    worksheet.mergeCells(1, 1, 1, lastColumn); // Gabungkan sel A1 sampai D1
    worksheet.getCell("A1").font = { bold: true, size: 16 }; // Styling font
    worksheet.getCell("A1").alignment = { horizontal: "center", vertical: "middle" }; // Posisi tengah
  
    // 2. Menambahkan Row Kosong Setelah Judul
    worksheet.addRow([]); // Menambahkan baris kosong
  
    // 3. Menentukan Header
    worksheet.columns = headers;

    const headerRowData = headers.map(item => item.header);
    worksheet.addRow(headerRowData);

    worksheet.getCell("A1").value = title; // Isi judul
  
    // 4. Styling Header (Baris ke-3 setelah judul & row kosong)
    const headerRow = worksheet.getRow(3);
    headerRow.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFF" } }; // Teks putih dan bold
        cell.fill = { 
          type: "pattern", 
          pattern: "solid", 
          fgColor: { argb: "4F81BD" } // Latar belakang biru hanya untuk sel yang ada data
        };
        cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true }; // Teks rata tengah
    });
  
    // 5. Ambil data dari API dan tambahkan ke worksheet
    worksheet.addRows(apiData);

    // Mulai dari row ke-4 (setelah judul dan header)
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber >= 4) { // Pastikan hanya styling row 4 ke bawah
            row.font = { color: { argb: "000000" } }; // Warna teks hitam
            row.alignment = { vertical: "middle", horizontal: "center", wrapText: true }; // Rata kiri, tengah secara vertikal
        
            // Opsional: Tambahkan border ke setiap sel dalam row
            row.eachCell((cell) => {
                cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
                };
            });
        }
    });
  
  
    // 6. Simpan file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${fileName}.xlsx`);
}

export default exportExcel;