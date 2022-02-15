# import xlrd
# import json
# path="Tutorial\\Nyalazone_Task\\T90_POL.xls"
# workbook=xlrd.open_workbook(path)
# total_sheet=format(workbook.nsheets)
# total_sheet=int(total_sheet)
# policy_no=input("Enter Policy No ")
# current=[]
# for sheet_no in range(0,total_sheet):
#     select_sheet=workbook.sheet_by_index(sheet_no)
#     maxium_col=select_sheet.ncols
#     maxium_row=select_sheet.nrows
#     for j in range(1,maxium_row):
#         value=select_sheet.cell_value(j,0)
#         my_dict={}
#         if value==policy_no:
#             for k in range(0,maxium_col):
#                 heading=select_sheet.cell_value(0,k)
#                 my_dict[heading]=select_sheet.cell_value(j,k)
#             current.append(my_dict)   
# print(current)
# s=json.dumps(current,sort_keys=False,indent=3) 
# with open('Tutorial\\Nyalazone_Task\\check.json', 'w', encoding='utf-8') as f:
#  f.write(s)           
            
import xlrd
import json
path="Tutorial\\Nyalazone_Task\\T90_POL.xls"
workbook=xlrd.open_workbook(path)
total_sheet=format(workbook.nsheets)
total_sheet=int(total_sheet)
policy_no=input("Enter Policy No ")
sheetnames=workbook.sheet_names()
current=[]
final=[]
my_sheet_dict={}
for sheet_no in range(0,total_sheet):
   
    my_sheet_list=[]
    select_sheet=workbook.sheet_by_index(sheet_no)
    sheet=sheetnames[sheet_no]
    # my_sheet_dict["sheet"]=sheet
    # my_sheet_list.append(sheet)
    #print(sheet)
    # print(my_sheet_list)
    maxium_col=select_sheet.ncols
    maxium_row=select_sheet.nrows
    sheet_list=[]
    for j in range(1,maxium_row):
        value=select_sheet.cell_value(j,0)
        my_dict={}
        if value==policy_no:   
            for k in range(0,maxium_col):
                heading=select_sheet.cell_value(0,k)
                my_dict[heading]=select_sheet.cell_value(j,k)#start from heere
            # current.append(my_dict)
            sheet_list.append(my_dict)
            my_sheet_dict[sheet]=sheet_list
            current.append(my_sheet_dict)
            # break

# print(len(my_sheet_dict))
           
            # final.append(my_sheet)
            # Rprint(final)

#print(current)
s=json.dumps(my_sheet_dict,sort_keys=False,indent=3) 
print(s)
with open('Tutorial\\Nyalazone_Task\\check.json', 'w', encoding='utf-8') as f:
  f.write(s)           
            
            


      



