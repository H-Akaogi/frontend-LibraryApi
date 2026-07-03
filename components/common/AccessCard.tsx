"use client";

import { MapPin, Train, Clock, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AccessCard = () => {
  return (
    <Card className="overflow-hidden rounded-2xl border-blue-100 bg-white shadow-sm">
      <CardHeader className="rounded-t-2xl bg-blue-50 px-4 py-3">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-blue-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          図書館へのアクセス
        </CardTitle>

        <p className="text-sm text-blue-700">
          所在地・交通情報を確認できます
        </p>
      </CardHeader>

      <CardContent className="space-y-4 p-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

            <div>
              <p className="text-sm font-bold text-slate-800">
                新宿区立中央図書館
              </p>
              <p className="mt-1 text-sm text-slate-600">
                〒169-0072
                <br />
                東京都新宿区大久保３丁目１−１
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 text-sm">
          <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
            <Train className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="font-bold text-slate-800">電車でお越しの場合</p>
              <p className="mt-1 text-slate-600">
                JR新宿駅 東口から徒歩5分
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="font-bold text-slate-800">開館時間</p>
              <p className="mt-1 text-slate-600">
                平日 9:00〜18:00
                <br />
                土曜 9:00〜13:00
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-100 p-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
            <div>
              <p className="font-bold text-slate-800">お問い合わせ</p>
              <p className="mt-1 text-slate-600">
                03-1234-5678
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <div className="flex h-36 items-center justify-center text-sm text-slate-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25922.353806430954!2d139.68343037671602!3d35.694376590528464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d48534d3bc7%3A0xff957839a5e468f9!2z5paw5a6_5Yy656uL5Lit5aSu5Zuz5pu46aSo!5e0!3m2!1sja!2sjp!4v1783063312187!5m2!1sja!2sjp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />          </div>
        </div>
      </CardContent>
    </Card>
  );
};