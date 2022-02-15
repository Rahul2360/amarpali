import xlrd
from openpyxl import Workbook
workbook=xlrd.open_workbook("/home/deepti/Downloads/T90_POL.xls")
total_sheets = len(workbook.sheet_names())
total_sheet=format(workbook.nsheets)
total_sheet=int(total_sheet)
policy_no=input("Enter Policy Number ")
sheetnames=workbook.sheet_names()
current=[]
my_sheet_dict={}
workbook_d = Workbook()

for sheet_no in range(0,total_sheet):
    select_sheet=workbook.sheet_by_index(sheet_no)
    worksheet_d= workbook_d.create_sheet(sheetnames[sheet_no])
    my_sheet_list=[]
    maximum_col=select_sheet.ncols
    maximum_row=select_sheet.nrows
  
    for j in range(0,maximum_row):
        value=select_sheet.cell_value(j,0)
        all_heading_dict={}
        all_data_list=[]

        if value==policy_no:   
            for k in range(0,maximum_col):
                all_data_list.append(select_sheet.cell_value(j,k))  
            worksheet_d.append(all_data_list)
                
workbook_d.save("/home/deepti/Downloads/combinedexcel.xlsx")     