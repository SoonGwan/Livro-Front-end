import React, { useEffect, useCallback, useState } from 'react';
import useStores from 'lib/hooks/useStores';
import { observer } from 'mobx-react';
import MainNotice from 'components/Main/MainNotice/MainNotice';
import moment from 'moment';
const MainNoticeContainer = observer(() => {
  const { store } = useStores();
  const { handleLatestNotice, NoticeLength } = store.NoticeStore;
  const [res, setRes] = useState({});

  const requestHandleLatestNotice = useCallback(async () => {
    await handleLatestNotice().then((res) => {
      if (!res || Object.keys(res).length === 0) {
        setRes({
          uuid: '',
          title: '공지사항이 없습니다.',
          content: '',
          createdAt: moment(),
        });
        return;
      }
      setRes(res);
    });
  }, [handleLatestNotice]);

  useEffect(() => {
    requestHandleLatestNotice();
  }, [requestHandleLatestNotice]);

  return <MainNotice res={res} NoticeLength={NoticeLength} />;
});

export default MainNoticeContainer;
