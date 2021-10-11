export async function insertStats(
  token,
  { favourited, userId, watched, videoId }
) {
  const operationsDoc = `
  mutation insertStats($favourited: Int!, $userId: String!, $watched: Boolean!, $videoId: String!) {
    insert_stats_one(object: {
      favourited: $favourited, 
      userId: $userId, 
      watched: $watched, 
      videoId: $videoId
    }) {
        favourited
        userId
    }
  }
`;

  return await queryHasuraGQL(
    operationsDoc,
    "insertStats",
    { favourited, userId, watched, videoId },
    token
  );
}

export async function updateStats(
  token,
  { favourited, userId, watched, videoId }
) {
  const operationsDoc = `
mutation updateStats($favourited: Int!, $userId: String!, $watched: Boolean!, $videoId: String!) {
  update_stats(
    _set: {watched: $watched, favourited: $favourited}, 
    where: {
      userId: {_eq: $userId}, 
      videoId: {_eq: $videoId}
    }) {
    returning {
      favourited,
      userId,
      watched,
      videoId
    }
  }
}
`;

  return await queryHasuraGQL(
    operationsDoc,
    "updateStats",
    { favourited, userId, watched, videoId },
    token
  );
}

export async function findVideoIdByUser(token, userId, videoId) {
  const operationsDoc = `
  query findVideoIdByUserId($userId: String!, $videoId: String!) {
    stats(where: { userId: {_eq: $userId}, videoId: {_eq: $videoId }}) {
      id
      userId
      videoId
      favourited
      watched
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "findVideoIdByUserId",
    {
      videoId,
      userId,
    },
    token
  );

  return response?.data?.stats;
}

export async function createNewUser(token, metadata) {
  const operationsDoc = `
  mutation createNewUser($issuer: String!, $email: String!, $publicAddress: String!) {
    insert_users(objects: {email: $email, issuer: $issuer, publicAddress: $publicAddress}) {
      returning {
        email
        id
        issuer
      }
    }
  }
`;

  const { issuer, email, publicAddress } = metadata;
  const response = await queryHasuraGQL(
    operationsDoc,
    "createNewUser",
    {
      issuer,
      email,
      publicAddress,
    },
    token
  );

  return response;
}

export async function isNewUser(token, issuer) {
  const operationsDoc = `
  query isNewUser($issuer: String!) {
    users(where: {issuer: {_eq: $issuer}}) {
      id
      email
      issuer
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "isNewUser",
    {
      issuer,
    },
    token
  );

  return response?.data?.users?.length === 0;
}

async function queryHasuraGQL(operationsDoc, operationName, variables, token) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

export async function getWatchedVideos(userId, token) {
  const operationsDoc = `
  query watchedVideos($userId: String!) {
    stats(where: {
      watched: {_eq: true}, 
      userId: {_eq: $userId},
    }) {
      videoId
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "watchedVideos",
    {
      userId,
    },
    token
  );

  return response?.data?.stats;
}

export async function getMyListVideos(userId, token) {
  const operationsDoc = `
  query favouritedVideos($userId: String!) {
    stats(where: {
      userId: {_eq: $userId}, 
      favourited: {_eq: 1}
    }) {
      videoId
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "favouritedVideos",
    {
      userId,
    },
    token
  );

  return response?.data?.stats;
}
