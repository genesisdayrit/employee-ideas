export const fetchIdeas = () => {
    return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTAEgCYsnfarUW9Z3GDHQNdBcfFSXCcub57pqfi9UWc7F0wtC8s4FIRRoKReMdArpSkuEJKUvTirLmC/pub?output=csv')
      .then((response) => response.text())
      .then((data) => {
        const csvRows = data.split('\n');
        const ideas = csvRows.slice(1).map((row) => {
          const rowData = row.split(',');
          return rowData[1]; // this returns just the idea
        });
        return ideas;
      });
  };
