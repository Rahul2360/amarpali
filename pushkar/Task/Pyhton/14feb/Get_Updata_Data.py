import xlrd
import json
path="Nyalazone_Task\\T90_POL.xls"
workbook=xlrd.open_workbook(path)
total_sheet=format(workbook.nsheets)
total_sheet=int(total_sheet)
policy_no=input("Enter Policy No ")
sheetnames=workbook.sheet_names()
current=[]
my_sheet_dict={}

for sheet_no in range(0,total_sheet):
    my_sheet_list=[]
    select_sheet=workbook.sheet_by_index(sheet_no)
    sheet=sheetnames[sheet_no]
    maxium_col=select_sheet.ncols
    maxium_row=select_sheet.nrows
    all_data_list=[]

    for j in range(0,maxium_row):
        value=select_sheet.cell_value(j,0)
        all_heading_dict={}
        
        if value==policy_no:   
            for k in range(0,maxium_col):
                heading=select_sheet.cell_value(0,k)
                all_heading_dict[heading]=select_sheet.cell_value(j,k)
            all_data_list.append(all_heading_dict)  
            my_sheet_dict[sheet]=all_data_list
            
           
    if len(all_data_list)==0:
            all_data_list.append(all_heading_dict)
            my_sheet_dict[sheet]=all_data_list
                
                
current.append(my_sheet_dict)   
print(len(my_sheet_dict))           
s=json.dumps(my_sheet_dict,sort_keys=False,indent=3) 
with open('Nyalazone_Task\\check1.json', 'w', encoding='utf-8') as f:
  f.write(s)  