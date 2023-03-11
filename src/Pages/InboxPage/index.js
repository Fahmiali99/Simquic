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
    const filter = inbox.filter((search) => {
      return search.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch(filter);
  }

  return (
    <div>
      <Searching handleChange={filterData} />
      {search?.length ? (
        search?.map((item, idx) => (
          <AllInbox
            key={idx}
            name={item.name}
            email={item.email}
            body={item.body}
          />
        ))
      ) : (
        <h1>Inbox is empty</h1>
      )}
    </div>
  );
}

export default InboxPage;
