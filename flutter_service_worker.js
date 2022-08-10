'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aec3d281307d0d1dde97ce8de9d61019",
"index.html": "4eb2d8f211a4ac07cea93ee6618186ef",
"/": "4eb2d8f211a4ac07cea93ee6618186ef",
"main.dart.js": "53d04c0c9a3505423515d654254ae53d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2517bd4720dc505331b2e92144a166a1",
".git/ORIG_HEAD": "2e4a10f1932c7fb9e423dd7aafdb1765",
".git/config": "0b22d062e45e5909245222429e348acc",
".git/objects/59/a8fd789dbd809408bb607bedffe075c05e5c0a": "7705a58f3e891c1a8cdf27f4e76a2661",
".git/objects/92/8b17ce2f30a1405bd8ddee64152832377345c6": "044aaa573ee03fd0c1babaf44d02087f",
".git/objects/66/3adc97668f99c2b3e824854102b76803e5f6a8": "5f21c7bb49c6d43cff06481f96ea024c",
".git/objects/66/282b0527d5acb23f8ddab51445ca2424e642e3": "cb8a6c696983391ebb881c5a05a8bc2e",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/97552516648ca147d82e90a37206907f5bb38f": "4acfd2ac9f4a10b6630a8b97a22ed511",
".git/objects/68/0806c7eaf3e3926b03054f3767c710c300572a": "fc5286bc495b388e3531d22db4e3a722",
".git/objects/6f/207265c716dfc239047f628f9e2c801bc1a7b3": "7edabf16a501c6717147ddac664453ca",
".git/objects/03/f38cd5ca603ab5dd176f999261b124b02792f7": "ce82bb3cd153f06b0a31f0edad20f846",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/486fb25b45bf38bfb9df59b4ed4b9e00af617d": "07c4d0c77598299d2c44454bd6222442",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/1b34a30438ef239f0df1fef48b8c168abab117": "db915568558d419cc6bf275033f4d342",
".git/objects/3c/2fdc787f00ed681f71f330e600a609407b0c57": "e7f590fdc885a33561e1fb96a25c474c",
".git/objects/3c/9cbd6a5d146cd39aa807451892558707eec092": "b47d8e382ef9e3ef8b230b702eb2a484",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/67/005c623211b66305240ea43b70862211479edf": "27b8c27eb7f40ef560cbd280e0d8e745",
".git/objects/94/a54f32eebe72e94889af0b24edc2435b1a9722": "fb1f9212a0251c288831e5fe98ebdb96",
".git/objects/a3/cd4b0548cba8935925e56b2d77c79dd2920beb": "99638442c03b9e2646404f97024fc0a9",
".git/objects/b5/58c2cd53f16ed859d6c32c10d7601256fa8a02": "2d8b6feff3d2759d3884d0e30f72cc5f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/75b1df9736ef6c39f37945a3298bb273bf6223": "4e9e94e94e77dbed5c20d40c42d0362b",
".git/objects/bb/f199bca73cbfb973ec2b2b3ca723cd4c571682": "193aa1fcc26d6272fa3ad8c75945d2ad",
".git/objects/bb/effdf64b97ede36ff9256f2b67fc84f6c5f849": "28e60bd5fc89fc3b1a2968d382163480",
".git/objects/b3/bbdfdef6fb5c1be3d9d45eb9396919a8d5ec10": "4787a14257cec1288d84270ff5c15b5e",
".git/objects/df/de2685dbe62e3825b536454b2cf4c146a7868f": "bf0a5796924ddf1ce0a559cc2b88ed7b",
".git/objects/b4/ed608439e78508175b14c04c5359064e07c1a3": "dc863bae51d314cde349d21ace2a8a40",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/93c7933ce7d85faef716658dcda88363ea2a98": "23a06b026aa3e40d4c31624f724773d3",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/79dd6dbc615f2879f53cefb384b596b77b1128": "ab14ad7e8cb98aee0287e485f925e3f1",
".git/objects/f4/8c46524770e53d5589ce06795b7f5409599e20": "b9008b05d05868167308fa3934bf9fc8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/02a65a8a232432413d5f35f1d638c16f1cf6cb": "23b4fd32b99d32d0655e31abe33ddb7b",
".git/objects/ee/b9845d705d2790d442bf4823bfa33380f4299e": "b2ef35b3bb102874ac985e26a02a6ed8",
".git/objects/fd/3de7c849773f2f0471e6c73846d48f74618b07": "cdacc3766b5884299e0cc70149e30a88",
".git/objects/f2/e4f99d0d9df82a2d9cad25f40fd569022618ba": "78bfb33d6078ed2c639b45ce9904d6d2",
".git/objects/f5/4271e5667090c1c9660c2ca9220c792c34a0b9": "5d17e8e54278754875e1ddd48e914aa6",
".git/objects/cf/7d3d08daa7cb792e5e8caa8fd264ab64d712e0": "b40fd68101a3b09dc0f33f9c1233f019",
".git/objects/c6/a834cc6a876785131637570a4f06e1e1e201e9": "595cd39fd8f9536bad85cdbb61195ec2",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/3a3ba26a4cb977e32cbee8417165831df46cbf": "0843d3ebfc39a8a85f4793d7308ffd79",
".git/objects/7d/5759a29d5fec3173002350d51340a2f69c9b46": "a84a451252c308ea3f16dce60400417f",
".git/objects/16/bb82238ef99e6dc0584e4f57b93b9004228db1": "8410d9bc877e66fd04cd77f06512e74e",
".git/objects/89/c96342c2403dcfea7c5200fc59648825fd03e0": "34524a694b79852a66d20d2548bce24e",
".git/objects/7b/e1473763b460bfaed2645ad7ec70e84b0d4ee2": "51473c535b1e0943654f6f8dcf8dc6f5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/4a817f237d0d814b983ffc05e75dbe3a378380": "7cc1dbb7ec5906c917b140c4fbd4b1cb",
".git/objects/81/c5c24629807d79b344e1984361e0bb2f12183c": "096f593b7715d913f07935f816b14b91",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/3bd36831632710db3f18f7fa9b3ca7689d80db": "a846844c5e35392e471cba088d7497d7",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/c518c2ee8eefaa5515e2046819fba7d80a98fa": "bbf5b7c3b2ee44a476c6eff3177c1d9a",
".git/objects/65/9264b30a6d9d1fc43690c6e6b509a41425e0a5": "8cb999ff0b3c7b0b1c05c04d6760623c",
".git/objects/5e/63a37f78cc905b02b7e28d8f9df495e0da7891": "0ff776551a5017cc2fe092869d7c2137",
".git/objects/5e/d1eb3e02dcae3cbf10e5cdef1e91bccc5369bc": "d91e8a114d0c3293ca8f93cbcff065b5",
".git/objects/06/2ef948914ed2a318d0f4bbc9185a291915dfff": "e4755b9f835eeb2f4ac306179120e463",
".git/objects/6c/e104fe836a88a2e5e8a2f00f8980c2e47c7afd": "f2e4642ffde355b47f495b2ddc23cd9b",
".git/objects/97/0dd4b1ea9098cc553d7d174f3d0e97b983dc57": "6ee791c1aad2c7493e5fc0dc88c58c34",
".git/objects/97/0db0cd5a1ae476add08370cc3191bfedc525af": "5dc9bcb37989b47028b7d75814451a2a",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/bf/83a07c0b7f3c5ba292014cad137b1ce0239451": "39a0762d07d62853a07da7e040e4026f",
".git/objects/bf/e30403566446664e0e775f6b594ca247035fad": "332c6a91b993b435c8cd443040b84673",
".git/objects/b1/1b34c39fe7fcfd9cfa327568c2e83667dcea71": "36def730486332c242658486e5471153",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/bbf37d02614825f9d60409e18490b094abe71e": "00aac8b1048de8389cbf57f80167dc31",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/d3a4dafc8bd90965a6cc1f5083f6e4a0cc0f0e": "b3176511e917e692597328d8101c104f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/4c3f437e5de953805f8719623913b7a1d09ba4": "a0a055343f0947fd77c0e9ca6140d0c8",
".git/objects/cc/421c0562a2b985f73623562c8917e943002361": "834ded72f993ec242d5ec028f956bbb0",
".git/objects/e6/28ef8efd7b4468ab09686561a7144af871da1d": "34ee8e5093c1c5f9cc1154c355db279c",
".git/objects/f0/806b8823ed2fae34820e0bf82040a1dc7d7471": "9e8a17655f0b108ecc2232141e28f656",
".git/objects/ff/314a0e9c23f3895fd7470ee5d06d420643881b": "ba4b6b7bfc297038eafc32ee50910cf2",
".git/objects/e9/f8e31671b88f936a77e6f0774c10e0825a0150": "d3fad3c93fde2f2f4a2fe66f19714792",
".git/objects/e9/19d25be5a5993604a9dd9764da362a53dd679a": "3550a20a49f825be8492178863375b3b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/d3c4b169843e5f1ab77e27b8fb231d9bb7ac7e": "e9f9d9d218b9f94fc4fa46f9fed9a10c",
".git/objects/1b/c6b69b65441ee026ef284834f27fd6c886ee11": "6bc392acb168d521e75929674bd970ef",
".git/objects/48/db35cb9d2018820de4e7779df04da04bbbba7d": "e5723313f07e48cbf70c983097d3e25e",
".git/objects/1e/55a67f9140d4bb3c12c9b913dd91691f2c8817": "db996eba7a8be25c7fd002189cf070f2",
".git/objects/84/c3057c8ab36c90a5a6c9925ea257c4b4ab0c48": "e58ec22de951913ceb41a252453966c0",
".git/objects/4a/f91b681fba7b89599d7df2a8f84135bc779964": "7b25af5881e6ec25fb987a720921531c",
".git/objects/24/7e35fc4f5ab04bbdb8b48dce836b31ca4f4d58": "53dc6e729f2cd0af1e53e864cbe0593a",
".git/objects/23/8857814598b5fa3e5b4bb971c0352046a24b24": "f713243bec7f98474748929ca12578fb",
".git/objects/23/819b014715962e48662261c0650e7e0dac5e8c": "eb098732492b6b1cc92ff9aabdb45610",
".git/objects/4f/a5bb009971a33a1246d688a19973060927e08a": "fcb459559e7a4f36e4a6b3be45206a86",
".git/objects/85/fb4629a7c325532169eb509e360863cc5be7c0": "c53d5cd6c42ad338b98700f8e85774a8",
".git/objects/1d/3f7ad4f15039f529a3147ac3dd9c7881875385": "8e399633220b44c49a6766d75ed44eb3",
".git/objects/82/12009817a9a482ca1ef837aca88bc7f8c33dc3": "09e639d90536b049ee77d2f95021c81d",
".git/objects/49/7b6b3c677c55696d7181b66baa48467df2ff1b": "b176640b77bf66cd7e4f3fa21c3d1ebd",
".git/objects/8b/a4d79f86a15c3b8e10ec840643d4b9f8d09b87": "bee2b620d4412d26460f12ec2ba00992",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e88695a3777a278469fb09d60e8d23e",
".git/logs/refs/heads/main": "6f53b83aa9449a20b558a0481709c525",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f46dcaa49a3707f2a9f3e872be656ed2",
".git/index": "7664ff9bc295968e526be8778ec2eda3",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a78c857b6d4efe2aff297a584d83ead4",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "b6b785f71f0b74dbece5f3650ba2b2a6",
"assets/NOTICES": "2b27b0cf32281b18c197ae1707668498",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/product_cord.csv": "995fc67141df03efebb3decf3d2b33bb",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
