export const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    category: 'electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking features and AMOLED display',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    category: 'electronics'
  },
  {
    id: '3',
    name: 'Leather Messenger Bag',
    description: 'Handcrafted genuine leather messenger bag with multiple compartments',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    category: 'accessories'
  },
  {
    id: '4',
    name: 'Premium Coffee Maker',
    description: 'Professional-grade coffee maker for perfect brews every time',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'appliances'
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
    category: 'home'
  },
  {
    id: '6',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with customizable RGB lighting',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
    category: 'electronics'
  },
  {
    id: '7',
    name: 'Portable Power Bank',
    description: '20000mAh power bank with fast charging and multiple ports',
    price: 49.99,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQEBIQFhUSDw8PEBAQEg8QDw8RFRIWFhYXFRUYHSggGBolHRUVITMiJSkrLi4uFx8zODYuNyotLisBCgoKDg0OFRAQGiwfFSUrNy0tMSsrLzctLys3LS04LS03Ly01KzctLSs3LSsrLystLTcrKys3Ky03NysrLSs3K//AABEIAMwA9wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBQYEBwj/xAA6EAACAQIEBAMFBgUEAwAAAAAAAQIDEQQFITESQVFhBnGBEyIyUpFCcoKhwdEHYrHh8CMzQ1MUksL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEAAQQDAAAAAAAAAAAAAAERAgMhUdESIkH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDF4veMXp9qX6ICeIxlnaNtN29l2Xc1GL8S+yfwqXbZ/U12a5morhic5VqOTuy4jvsD4mw1WycuB9Kmi9JbG4Uk9Vz2tzPkcmejBZpWoP/AEqkor5b3g/wvQYa+qg4zL/G+yr0/wAdL9Yv9zpsBm1DEL/SqRk/l2mvOL1Ir2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNmqxuN47pO0Fu+c/LsBPGYy91F+79qXXsjnM1zNJcMSGa5nb3YnP1Kl3dlkRmpUbd2VtmHIg2VCTISYbK5MA2Q4rNNbrVNboSZW2Ub3L/FuLoWTkqkflq3b9Jb/AFudTlvjjDVLKrxUpfze9T/9l+qR82bK5MmK+40a0ZxUoSjKL2lFqUX6osPh+Dx9WhLio1JwfPhdk/NbP1Opyv8AiDVhaOIpqovnp2hU9Y/C/wAiYa+jg0+VeJsJirKnVSk/+OfuVPRP4vS5uCKAAAAAAAAAAAAAAAAAAAYk0ld+rZic1FNtpJatvZGkx2N9p2gtls5932AsxuN47paQX1n/AGOczXM/sxK81zO/uxNJKdzUiMzm27srbDZBsIy2QbMNkGwDZBsNkJMoNlcmZbK5MA2VyZlshJgYbISkJSM4enxO72AuwtG/vS2NlgP4of8AhVoUq3FUoXUZy1lUor5o85Jc49Nuj5bxFnSpxdOD159jiqcJ16nDG7bYxX6/w9eNSEZwkpRnFThKLTjKLV00+aaLDjP4TwnTy6FGbb9jOcINtv3HaSXknJpdFZHZmFAAAAAAAAAAAAAAjVqKKcpNJJXbZGvWjTi5SaSW7ZzuNxrqvilpBawg+feQFuNxrq6vSC+GOzn3f7HO5pmd9EV5pmTlojTykaxEpTuQbItkWwiTZByMNkWyjLZBsw2QbAy2QbDZBsBJlbYbINgGyEmGyiUuJ2QEoLjfY82dZrGjDhjvYZlj40IWW/I4jG4qVSTb1bZRGtUlWnbVuTPofgbws3KK4byla76Gq8I+H3dTmveey6H1vwpFU37i024ucvLsS1XXZTl8cNSjTj5t9We0jTldEjCgAAAAAAAAAAFWKxMKUXObsl/ll3IY3GQowc5uyX1b6Jc2cti8ZKrL2tXRL/bp8o931YFuMxsqz46mkVrTp/rLuaDM8ycm0irMsycnZGqcjSJykRbItkWyom2RbINmGwJNkGzDZFsDLZByMNkWwDZBsORBsA2RbMNnmr1raLcDNapfRFGKxUaMG3v+pCtXVKLk3qcrmePdRt/RFFWZY2VSTb9F0Nx4YyRzaqTX3UePw/lLrSU5r3U/qz6XlOAtZJa6W/lXXzJar15XgL2gvxP/AOf3O7yjBcKR4smy1RS0Olw9GxhV9NWRIAAAAAAAAAAeXMcfTw8HOo+yS+KT5JLmyvNszp4Wnxze+kYL4py5JI4/EYidSXt8Rv8A8dP7NJfv3LguxWKlVl7avpb/AG6XKC79ZdzRZlmLm7IqzHMXN2T0Na5FxFjkY4iHERbKixsi2Q4jFwJNmGyDZhsCTZFsi2RbAy2RbMNkGwMtkGw2UV6yigGIrcJ4p1VFOUiE6u8maLM8dxNpbL8yiGaY9zfbkupTlGXSxE7v4U9WU4LCyxE1Fbc30PouRZVGEUraL6yfQK9eTZcoKNl2jH9X2O5yTLLJN7vVvueXJct2k1r/AEXRHX4PD2Ri1VuFoWSPakYhGxIgAAAAAAAAGtzvOKeEp8U9ZPSnTXxTl0SKvEmdrB001HinNtU4N8K0Wrk+iuvqj5u82rSrSr4iCqSfwunK3s4/LGErK3fiA3VWtOcniMS05v4IfZpR6Lv3NJmOYubstjy4vNlWbUW9N4tOMl5xep5bm0WcRjiK7jiCLLmOIruY4gLHIw5FfEYbAm2YbIXIuQE2yLZFsi2BJsg2YciupUsrsDNWqoq5q6tbid3tyI4jEcT7I1eOxf2V6lGMwxt7pbczVU6cq01GJicnNqMeb+p2PhvJeFLT3nu3yQHs8PZOoRS9ZSO9yXLeJptaL4V0X7nlybLeK1l7q2/mfVnb5dg1FLQxa0uwOFSSNpThYjRp2LiAAAAAAAAAAAOQ/iJh24UKq2hKcJduOzTfrC3qj59Wmm95J23Te/PTZ69j7PmGEjWpTpzV4zi4tfqujW/ofGvEWXVMJVcJ35uE7WjUj18+q/x2Vmz9eOpafu1Em1dwkrptdU1rF+v7KuUZw2fGukrRqLyez9beZ5/aybXZp30tbn+Rb7YveEsqdPERk7bPnGWkvpzXdaFlzz1FGatJX6dU+qfJlfvx+F8S+Wb95eUufr9RqvXxDiPNTxMW+HVS+WWkvTr5q5ZxFRZxGOIr4jHEBZci5EHIw5AScjDZByIuQEpTsavGYridlsMdi76I1WIr20RRnF4nkjU16l/dXMliKttOb3Nv4eyhyaqTX3UB6/DeTNWlJXk9l0PoWUZde0UvvPq+i7HmynLmrK2r3/lXTzO5yjLlFLQxar05ZgVFLQ3tClYhh6Nj1JEVkAAAAAAAAAAAABhmlzvLaeIg6dWClF8nun1T3T7o3ZTWp3A+RZ14GrU7yw0uOO/s5tKovKW0vW3qcpU4qcnCpGUZLeM04yXoz75Vw5p82ySjiI8NWnGS5N6Sj92S1XoB8ejVLFM6LOfAtWneWGlxrf2U2ozX3ZbP1t5s5Wop05OFSMoyW8ZpxkvRgeh8M1Z2kr9mk1+pD2c4/BK6+Wbd/Se/1uaaWVuEpVMNUlTlJuUoNuVKbbu7p7fmbbC1JuEfaJKVveUdVft2KJxxCvwu8X8stG/J7S9Cy5FuM007SV7NOzV11KnQlH4Jfgm216S3X5llTF1yLkU+3s7STi9kpWs/KWz/AKknI0ibka/HYu2iM43FcKsjTVq3MDNetY8Nerw+b/IlUnZcT35IzlmBlXnd7X1AvyPLHVlxyWienc+i5Pl1uF21fwroup5cly1JLTTaK+Z/sd1kuW21e7M2rHpybLeFLQ6jC0LFeEw6SRsIRsZVKKsZAAAAAAAAAAAAAAAAAAhKBRUpHqMNAayrhzU5rklHER4K1OMlyv8AFHvGS1i/I6aVMonSA+S5z4DqU7ywsuNf9VRpT/DPZ+Tt5nKVYzpTcKkZQkt4zTjLz8u598q4c1Wa5LRxEeCrTjNa2vvHvFrVPyA+C1MrtOVXD1JU5yfFJfFTm731i/7+RtMFUqOEfapKeqkou8dG9V5qz9Tq858B1IXlhZ8S/wCqo0p/hns/W3mcnWhOlJwqRlCS3jNOL/uu5dCGPo1Jzo8UXKOkqct3pyT3Rmrg3b/Tlb+WV5Q9HvH812NJjMrqe1nXoyi3O3HSqRTjK3R+nZ9yeGzlwfBUTpv5ark6b+7UteK+8mu526fSnOfXl9vF9+8cufU+N7zt5jz47jhK1RNPlzjL7r5/1PFKX2n6I65ShiIuEouzSbT27OMlo/NM5bM8tqRrKnunrCXVd+6M2XjfjymVrjZZs7x5cLh5Yidltz7I73I8rSSSXuq13zb6eZ5chyjhSS85SO7ybLb200Wy/V9zNrT1ZLlt7NryXRHY4LDWSKcvwnCkbijTsYVKlCxYAAAAAAAAAAAAAAAAAAAAAAADDRkAVSplM6J6zDQGsqYc1eaZNSxEeCrTjNcuJaxfVPdPujpJUymdED5NnPgKpC8sLLiW/sqjSl+Gez9beZx2NwjTdLEU2mvs1ItNd1+6P0FUwxrczySliI8FWnGa5KS1T6p7p90B8KyrAQoObhKXDPh9x6qLV7287/kbL2PHKCS140l66f55HY4/+HTvfD1Wl8lVcSXZSWv1uZy3wVWpyUqtnbZL4ehd/UxTk+WXsltfV/M/2O4y3A8KWhnLsq4EtDdUaFiKUKVi9IJGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIuJh0kTAEFSRLhRkAYsZAAAAAAAAAAAAAAAAAAAAD//2Q==',
    category: 'electronics'
  },
  {
    id: '8',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 modern ceramic plant pots with drainage holes',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
    category: 'home'
  }
];