
```typescript
  async function fetchData() {
    const baseUrl = 'https://sheet.spacet.me'
    const sheetId = '1R1QAsK9daCyJMU1bz70dot7Fa3uxLOhL4V6md0ga5jo'
    const sheetName = 'Sheet1'
    const endpoint = `${baseUrl}/${sheetId}/${sheetName}.json`
    const { values } = await fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to load data from ' + endpoint)
        }
        return response.json()
      })
    return values
  }
```