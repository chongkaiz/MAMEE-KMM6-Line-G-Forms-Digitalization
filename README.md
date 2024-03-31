# Mamee KMM6 Line G Forms Digitization

Interface map:
```base
- Main
    L Line
      L Forms
          L Form selection
              L Form key-in
                L Form check and submit
      L Approve
          L Forms that need approval
              L Review and approve approve
      L Graphs
          L Graph Selection
              L Graph View
                  L Print as PDF
      L Reports
          L Report Selection
              L Report View
                  L Print as Excel
      L Add new form
          L Add new input, add label, select type
```


Functions:
- [ ] login function for users
- [ ] add new forms


Current Progress:
- [x] layout for react router using <Outlet>
- [x] form validation
- [ ] backend

bugs:
- [x] form checking without checkbox, will render empty grid with padding
- [ ] when refreshed, navbar and user logged in selection (maybe use a state to remember it)

Mock:
- [x] Daily Dry Mixer Record, Fryer Section Record, Crisps Control Record form
- [x] operator login disable other pages
- [x] check before submit data
- [x] validation with mock data
- [x] graph with mock data
- [x] graph maybe need some other lines: mean, upper limit, lower limit
- [x] report with mock data