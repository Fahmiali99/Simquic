import React, { useState, useEffect } from "react";
import { getAllChat } from "../../Lib/fetchApiInbox";
import { useDispatch, useSelector } from "react-redux";
import { setInbox } from "../../Store/inbox";

import AllInbox from "../../Components/Modules/Inbox/AllInbox";
import Searching from "../../Components/Common/Searching";

function InboxPage() {
  const dispatch = useDispatch();
  const { inbox } = useSelector((state) => state.inbox);
  const [search, setSearch] = useState(inbox);

  useEffect(() => {
    getAllChat().then((data) => {
      dispatch(setInbox(data));
    });
  }, [dispatch]);

  function filterData(e) {
    e.preventDefault();
    const filter = inbox.filter((search) => {
      return search.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(filter);
  }

  return (
    <div className="  pt-6 px-8 bg-white border-2 rounded-lg  ">
      <Searching handleChange={filterData} />
      <div className="overflow-y-auto" style={{ height: "450px" }}>
        {search?.length ? (
          search?.map((item) => {
            return (
              <AllInbox
                key={`${item.id} `}
                uri_id={item.id}
                name={item.name}
                email={item.email}
                body={item.body}
              />
            );
          })
        ) : (
          <h1>Inbox is empty</h1>
        )}
      </div>
    </div>
  );
}

export default InboxPage;
