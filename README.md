# AVSS 2027 Website

This repository contains a Markdown-based GitHub Pages site for AVSS 2027.
The homepage content is written in Markdown and rendered by GitHub Pages/Jekyll.

这个仓库是一个 Markdown 驱动的 GitHub Pages 会议网站模板，首页内容主要写在
`index.md` 里，由 GitHub Pages/Jekyll 自动渲染。

## How It Renders

- `index.md` is the homepage content.
- `_layouts/default.html` is the Jekyll page shell.
- `assets/css/site.css` controls the visual style.
- The hero uses a University of Macau nighttime aerial photo. Attribution is
  shown in the site footer, and the venue page credits its campus gallery.

GitHub Pages can render this directly with Jekyll.

## Publish On GitHub Pages

To publish at `https://avss2027.github.io/`, the repository should be named
`AVSS2027.github.io` and `_config.yml` should keep `baseurl: ""`.

1. Open the repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select the `main` branch and the repository root folder `/`.
5. Save. GitHub will build `index.md` into the website homepage.

If the repository remains named `AVSS-2027`, GitHub Pages will publish it as a
project site at `https://avss2027.github.io/AVSS-2027/` instead.

## Edit Content

Most conference text is in `index.md`. Update the placeholder fields for dates,
location, chairs, speakers, and deadlines when confirmed.

主要内容都在 `index.md`，确认会议日期、地点、主席、讲者和截稿时间后，直接改
这个文件即可。

## Local Preview

Install the dependencies and preview the site from the repository directory:

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

On this Windows machine, Ruby and Jekyll are installed in WSL Ubuntu 22.04.
Run these commands in PowerShell from the repository directory:

```powershell
wsl -d Ubuntu-22.04 -- bash -lc 'bundle exec jekyll build'
wsl -d Ubuntu-22.04 -- bash -lc 'bundle exec jekyll serve --host 127.0.0.1 --port 4000 --force_polling'
```

Open `http://127.0.0.1:4000/`. Press `Ctrl+C` in the serving terminal to stop it.
The `--force_polling` option watches files stored on the Windows filesystem.

## Search Metadata

- `_includes/seo.html` renders page titles, descriptions, canonical URLs, social
  sharing metadata, and JSON-LD for the website, pages, conference, and breadcrumbs.
- Set `seo_title`, `description`, and `sitemap: true` in the front matter of each
  public page. `sitemap.xml` automatically lists pages that opt in.
- Keep `_config.yml`'s `url` set to the public HTTPS domain. Jekyll's development
  server uses localhost URLs; production builds use the configured public domain.
- `_config.yml`'s `conference` values supply the event metadata and countdown
  date. Keep the homepage date text and SVG logo in sync when changing dates.
- Campus address source: <https://www.um.edu.mo/contact/>.
- `_includes/hero-image.html` and `_includes/hero-srcset.html` supply the visible,
  high-priority hero image. `_config.yml` defines its dimensions, alt text,
  responsive sources, and social-sharing image.
- Unannounced navigation entries link to individual TBD pages in `pending/`.
  These pages use `_layouts/pending.html`, are excluded from indexing and the
  sitemap, and do not preload the hero image. To publish confirmed content,
  replace the page body and set `layout: default`, `noindex: false`,
  `sitemap: true`, and `has_hero: false` in its front matter. Keep its permalink
  so existing menu links remain valid.
- Subpages show breadcrumbs matching their structured data. `404.html` is
  excluded from indexing and the sitemap and does not preload the hero image.

Build production output before checking canonical URLs and the sitemap:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

After publishing, submit `https://avss2027.org/sitemap.xml` in Google Search
Console and inspect the live pages. Structured data does not guarantee a rich
result: <https://developers.google.com/search/docs/appearance/structured-data/event>.

## Campus Photographs

The current campus photographs were supplied from the University of Macau's
"UM High-resolution Panorama" collection:
<https://www.um.edu.mo/news/campus-photos/>. Web-sized WebP derivatives keep the
supplied photographs intact; the full-resolution originals remain outside the
repository.

| Web asset | Supplied photograph |
| --- | --- |
| `um-campus-night-{960,1600,2400}.webp` | `5_澳大_航拍_晚上 UM Aerial View_Nighttime_1.jpg` |
| `um-campus-aerial-day.webp` | `4_澳大_航拍_白天 UM_Aerial View_Daytime_2.jpg` |
| `um-campus-lake-day.webp` | `1_澳大_湖景_白天 UM_Lake View_Daytime.jpg` |
| `um-library-day.webp` | `8_澳大_圖書館_白天 UM_Library_Daytime.jpg` |
| `um-wall-great-wisdom.webp` | `7_澳大_博雅之璧 UM_The Wall of Great Wisdom.jpg` |

`/venue-and-travel/` contains the campus gallery and Macau sightseeing resources.
`/sponsorships/` is a published content page; its front matter overrides the
pending-page defaults so it is indexed and included in the sitemap.
