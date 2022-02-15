import xlrd
import json

policy_number=input("Enter Policy Number : ")
workbook_s=xlrd.open_workbook('/home/devendra/Downloads/T90_POL.xls')
total_sheets=format(workbook_s.nsheets) 
total_sheets=int(total_sheets)
sheet_names = workbook_s.sheet_names()
final_list=[]
final_dict={}
for i in range(0,93):
    worksheet_s=workbook_s.sheet_by_index(i)
    row_s=worksheet_s.nrows
    col_s=worksheet_s.ncols
    a=0
    current_list=[]
    for j in range(0,row_s):  
        current_dict={}
        a=a+1
        check=worksheet_s.cell_value(j,0)
        if check==policy_number:
            for k in range(0,col_s):
                head=worksheet_s.cell_value(0,k)
                data=worksheet_s.cell_value(j,k)
                current_dict[head]=data
            current_list.append(current_dict)
            final_dict[sheet_names[i]]=current_list
            final_list.append(final_dict)

        elif a==row_s and len(current_list)==0:
            current_list.append(current_dict)
            final_dict[sheet_names[i]]=current_list
            final_list.append(final_dict)

final_data=json.dumps(final_list,sort_keys=False,indent=3)
print(final_data)
print(len(final_dict))
