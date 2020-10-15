import React, { useEffect, useState, useMemo } from "react";


const DataTable = () => {
  
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const headers = [
    { name: "ID", field: "id" },
    { name: "First Name", field: "first_name" },
    { name: "Last Name", field: "last_name" },
  ];

  useEffect(() => {
    const getData = () => {
      

      fetch("https://example.com/api/users")
        .then((response) => response.json())
        .then((json) => {
          
          setComments(json);
          console.log(json);
        });
    };

    getData();
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;

    setTotalItems(computedComments.length);

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search, sorting]);

  return (
    <>

     
              <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
           

         
            <tbody>
              {commentsData.map((comment) => (
                <tr>
                  <th scope="row" key={comment.id}>
                    {comment.id}
                  </th>
                  <td>{comment.first_name}</td>
                  <td>{comment.last_name}</td>
                  <td>{comment.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {loader}
    </>
  );
};

export default DataTable;
