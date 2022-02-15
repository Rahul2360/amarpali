import xlrd
from openpyxl import Workbook
wb = xlrd.open_workbook("/home/tikam/notebook/T90_POL.xls")
res = len(wb.sheet_names())
workbook_d=Workbook()
worksheet_s=workbook_d.active
worksheet_s["A1"]="Sheet_Name"
worksheet_s["B1"]="Position"
worksheet_s["C1"]="column"
for i in range(0,res):
    data_list=[]
    sheet=wb.sheet_by_index(i)
    sheet_name=wb.sheet_names()
    cell_value=sheet.cell_value(0,1)
    data_list.append(sheet_name[i])
    data_list.append(i+1)
    data_list.append(cell_value)
    print(data_list)
    worksheet_s.append(data_list)
workbook_d.save(filename="/home/tikam/notebook/sheets/T90_outputsheet.xlsx")