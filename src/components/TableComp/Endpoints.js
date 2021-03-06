//json in a js object 

const Endpoints = {
  "people" : [
    {
      "parents" : [
        {
          "id":1,
          "name":"Albert Einstein",
          "yearOfBirth":1879,
          "numChildren": 3,
          "profession":"Theoretical physicist"
        },
        {
          "id":2,
          "name":"Stephen Hawking",
          "yearOfBirth":1942,
          "numChildren":3,
          "profession":"Theoretical physicist"
        },
        {
          "id":3,
          "name":"Richard Phillips Feynman",
          "yearOfBirth":1918,
          "numChildren":2,
          "profession":"Theoretical physicist"
        },
        {
          "id":4,
          "name":"Gregor Mendel",
          "yearOfBirth":1822,
          "numChildren":0,
          "profession":"Geneticist"
        }
      ],
      "children" : [
        {
          "name":"Lieserl Einstein",
          "yearOfBirth":1902,
          "mother":"Mileva Marić"
        },
        {
          "name":"Hans Albert Einstein",
          "yearOfBirth":1904,
          "mother":"Mileva Marić"
        },
        {
          "name":"Eduard \"Tete\" Einstein",
          "yearOfBirth":1910,
          "mother":"Mileva Marić"
        }
      ]
    }
  ]
}

export default Endpoints;
