// app/api/og/route.tsx

import { ImageResponse } from 'next/og';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          backgroundColor: 'black',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontStyle: 'normal',
            color: 'white',
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          Hello World
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
export const dynamic = 'force-dynamic';
