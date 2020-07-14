import React from 'react';
import MaterialTable from 'material-table';
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { Search, ViewColumn, SaveAlt, ChevronLeft, ChevronRight, FirstPage, 
    LastPage, Add, Check, FilterList, Remove, Clear, ArrowUpward } from '@material-ui/icons';

const prepareBugs = data => data.map(d => ({ ...d, 
    bugs: d.bugs.map(b => b.title).join(',')
}));

export default ({ data }) => {
    return (
      <MaterialTable

        icons={{ 
            Check: Check,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
            ViewColumn: ViewColumn,
            DetailPanel: ChevronRight,
            ResetSearch: Clear,
            SortArrow: ArrowUpward
        }}

        columns={[
          { title: 'Fisrt Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Country', field: 'country', sorting: false },
          { title: 'Bugs', field: 'bugs', sorting: false },
        ]}

        data={prepareBugs(data)}  

        options={{
          sorting: true,
          search: false,
          showTitle: false,
          paging: false,
          toolbar: false,
        }}
      />
    )
  }
  