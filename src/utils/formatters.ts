import _ from 'lodash';

/** Peer Formatter  */
const formatPeers = (peersList: GetPeerResponse[]) => {
  const list = _.map(peersList, (peer: GetPeerResponse) => ({
    label: peer.name,
    value: peer.uid,
  }));
  return list;
};

/** Reviews Formatter */
const formatReviews = (reviewList: any) => {
  const list = _.map(reviewList, (review: any) => ({
    ...review,
    key: review.reviewer + review.reviewee,
  }));
  return list;
};

export { formatPeers, formatReviews };
