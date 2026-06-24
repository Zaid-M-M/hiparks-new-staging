const API_VERSION = process.env.SF_API_VERSION;

/* STEP 1: OAuth */
export async function getAccessToken() {
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.SF_CLIENT_ID,
    client_secret: process.env.SF_CLIENT_SECRET,
  });

  const res = await fetch(`${process.env.SF_BASE_URL}/services/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

/* STEP 2: Account lookup */
export async function findAccount(token, name) {
  const query = `
    SELECT Id FROM Account
    WHERE Name='${name.replace(/'/g, "\\'")}'
    LIMIT 1
  `;

  const res = await fetch(
    `${token.instance_url}/services/data/${API_VERSION}/query?q=${encodeURIComponent(
      query,
    )}`,
    {
      headers: { Authorization: `Bearer ${token.access_token}` },
    },
  );

  const data = await res.json();
  return data.records?.[0]?.Id || null;
}

/* STEP 3: Account create */
export async function createAccount(token, name) {
  const res = await fetch(
    `${token.instance_url}/services/data/${API_VERSION}/sobjects/Account`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name: name }),
    },
  );

  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.id;
}

/* STEP 4: Lead__c create */
export async function createLead(token, payload) {
  const res = await fetch(
    `${token.instance_url}/services/data/${API_VERSION}/sobjects/Lead__c`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data;
}
