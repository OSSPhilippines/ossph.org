import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'Open Source Software PH';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [molotFont, robotoFont, logoBuffer] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'fonts', 'Molot.otf')),
    readFile(join(process.cwd(), 'public', 'fonts', 'RobotoCondensed-Regular.ttf')),
    readFile(join(process.cwd(), 'public', 'images', 'ossph-logo.png')),
  ]);

  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e3f9ff 100%)',
          fontFamily: 'Roboto Condensed',
          padding: 60,
        }}
      >
        <img
          src={logoBase64}
          width={160}
          height={83}
          style={{
            marginBottom: 24,
          }}
        />

        <h1
          style={{
            fontFamily: 'Molot',
            fontSize: 72,
            fontWeight: 400,
            background: 'linear-gradient(to right, #0060A0 0%, #7524B3 50%, #CF557D 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Open Source Software PH
        </h1>

        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#64748b',
            margin: '24px 0 0 0',
            textAlign: 'center',
          }}
        >
          The leading Open Source Software Community in the Philippines
        </p>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#94a3b8' }}>
            ossph.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Molot',
          data: molotFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Roboto Condensed',
          data: robotoFont,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
