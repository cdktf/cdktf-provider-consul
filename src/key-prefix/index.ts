/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#datacenter KeyPrefix#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#id KeyPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#namespace KeyPrefix#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#partition KeyPrefix#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#path_prefix KeyPrefix#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#subkeys KeyPrefix#subkeys}
  */
  readonly subkeys?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#token KeyPrefix#token}
  */
  readonly token?: string;
  /**
  * subkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#subkey KeyPrefix#subkey}
  */
  readonly subkey?: KeyPrefixSubkey[] | cdktf.IResolvable;
}
export interface KeyPrefixSubkey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#flags KeyPrefix#flags}
  */
  readonly flags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#path KeyPrefix#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#value KeyPrefix#value}
  */
  readonly value: string;
}

export function keyPrefixSubkeyToTerraform(struct?: KeyPrefixSubkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.numberToTerraform(struct!.flags),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function keyPrefixSubkeyToHclTerraform(struct?: KeyPrefixSubkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.numberToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyPrefixSubkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KeyPrefixSubkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyPrefixSubkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: number; 
  public get flags() {
    return this.getNumberAttribute('flags');
  }
  public set flags(value: number) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KeyPrefixSubkeyList extends cdktf.ComplexList {
  public internalValue? : KeyPrefixSubkey[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KeyPrefixSubkeyOutputReference {
    return new KeyPrefixSubkeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix consul_key_prefix}
*/
export class KeyPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_key_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyPrefix to import
  * @param importFromId The id of the existing KeyPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_key_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/key_prefix consul_key_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: KeyPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_key_prefix',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._pathPrefix = config.pathPrefix;
    this._subkeys = config.subkeys;
    this._token = config.token;
    this._subkey.internalValue = config.subkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // subkeys - computed: false, optional: true, required: false
  private _subkeys?: { [key: string]: string }; 
  public get subkeys() {
    return this.getStringMapAttribute('subkeys');
  }
  public set subkeys(value: { [key: string]: string }) {
    this._subkeys = value;
  }
  public resetSubkeys() {
    this._subkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subkeysInput() {
    return this._subkeys;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // subkey - computed: false, optional: true, required: false
  private _subkey = new KeyPrefixSubkeyList(this, "subkey", true);
  public get subkey() {
    return this._subkey;
  }
  public putSubkey(value: KeyPrefixSubkey[] | cdktf.IResolvable) {
    this._subkey.internalValue = value;
  }
  public resetSubkey() {
    this._subkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subkeyInput() {
    return this._subkey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      subkeys: cdktf.hashMapper(cdktf.stringToTerraform)(this._subkeys),
      token: cdktf.stringToTerraform(this._token),
      subkey: cdktf.listMapper(keyPrefixSubkeyToTerraform, true)(this._subkey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subkeys: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._subkeys),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subkey: {
        value: cdktf.listMapperHcl(keyPrefixSubkeyToHclTerraform, true)(this._subkey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeyPrefixSubkeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
