const { Client } = require('pg');

async function checkDb() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_Bq2UC0nDZmOX@ep-purple-river-a1abg5lx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  });
  
  await client.connect();
  
  console.log('--- global_challenges schema ---');
  const schema = await client.query(`
    SELECT column_name, data_type, column_default
    FROM information_schema.columns
    WHERE table_name = 'global_challenges';
  `);
  console.table(schema.rows);

  console.log('--- recent global_challenges ---');
  const challenges = await client.query('SELECT * FROM global_challenges ORDER BY created_at DESC LIMIT 5');
  console.table(challenges.rows);
  
  console.log('--- recent logs ---');
  const logs = await client.query('SELECT * FROM logs ORDER BY log_date DESC LIMIT 5');
  console.table(logs.rows);
  
  await client.end();
}

checkDb().catch(console.error);
