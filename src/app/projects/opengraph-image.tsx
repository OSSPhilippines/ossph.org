import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { projects } from '@/data/projects';

export const alt = 'OSSPH Projects';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const projectCount = projects.length;

  const [molotFont, robotoFont] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'fonts', 'Molot.otf')),
    readFile(join(process.cwd(), 'public', 'fonts', 'RobotoCondensed-Regular.ttf')),
  ]);

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
        <div style={{ fontSize: 80, marginBottom: 24 }}>
          🚀
        </div>

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
          OSSPH Projects
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
          Open source projects by the Filipino community
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 32,
            padding: '12px 28px',
            backgroundColor: '#0060A0',
            borderRadius: 9999,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#ffffff' }}>
            {projectCount} Community Projects
          </span>
        </div>

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
